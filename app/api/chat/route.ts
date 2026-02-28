import { NextRequest, NextResponse } from 'next/server';
import { movies, Movie } from '@/lib/movies';

interface ChatHistoryItem {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequestBody {
  message: string;
  history?: ChatHistoryItem[];
}

interface ChatResponse {
  message?: string;
  error?: string;
}

const findRelevantMovies = (message: string): Movie[] => {
  const lowerMessage = message.toLowerCase();
  
  // Detect if this is an informational query (asking "what is" about a movie)
  // Must be asking FOR INFORMATION about a specific movie, NOT asking for MORE recommendations
  const infoPatterns = [
    /what\s+is\s+(?:the\s+)?movie\s+[^\?]*\?*$/i,
    /tell\s+me\s+about\s+(?:the\s+)?movie\s*[^\?]*\?*$/i,
    /what\s+is\s+(?:the\s+)?(?:\w+\s+)?movie\s+(?:\w+\s+)*(?:plot|story|about|summary)\?*$/i,
    /movie\s+(?:info|information|details|summary)\s*\?*$/i,
    /what\s+(?:is|was)\s+(?:the\s+)?(?:plot|story)\s+of\s+(?:the\s+)?movie/i,
    /who\s+(?:directed|wrote|stars?|acted)\s+(?:in\s+)?(?:the\s+)?movie/i,
  ];
  
  // Exclude patterns that indicate user wants MORE recommendations
  const recommendationPhrases = [
    /more\s+(?:like|similar)/i,
    /like\s+that/i,
    /similar\s+to/i,
    /recommend/i,
    /more\s+movie/i,
    /another\s+(?:movie|one)/i,
    /other\s+movie/i,
  ];
  
  const wantsRecommendations = recommendationPhrases.some(pattern => pattern.test(lowerMessage));
  
  const isInformationalQuery = infoPatterns.some(pattern => pattern.test(message)) && !wantsRecommendations;
  
  // If it's an informational query, return empty to trigger helpful response
  if (isInformationalQuery) {
    console.log('Detected informational query, returning empty results');
    return [];
  }
  
  // Detect vague/irrelevant queries
  const vaguePatterns = [
    /^(what|who|where|when|why|how)\s+\w+\s*$/i, // Very short questions
    /just\s+(a\s+)?movie/i,
    /any\s+movie/i,
    /movie\s*$/i,
    /^paradise$/i,
  ];
  
  const isVagueQuery = vaguePatterns.some(pattern => pattern.test(lowerMessage));
  
  if (isVagueQuery) {
    console.log('Detected vague query, returning empty results');
    return [];
  }
  
  // Start with a copy of the movies array
  let filteredMovies = [...movies];
  
  // Check for genre keywords
  const genreKeywords = ['action', 'comedy', 'drama', 'horror', 'sci-fi', 'science fiction', 'romance', 'thriller', 'adventure'];
  const foundGenres = genreKeywords.filter(g => lowerMessage.includes(g));
  
  // Apply genre filter first
  if (foundGenres.length > 0) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.genre.some(g => foundGenres.includes(g.toLowerCase()))
    );
  }
  
  // Check for year ranges (apply AFTER genre filter)
  let yearFilter: { min?: number; max?: number } | null = null;
  if (/\b199[0-9]\b/.test(lowerMessage) || /\b90s\b/i.test(lowerMessage)) {
    yearFilter = { min: 1990, max: 1999 };
  } else if (/\b200[0-9]\b/.test(lowerMessage) || /\b2000s\b/i.test(lowerMessage)) {
    yearFilter = { min: 2000, max: 2009 };
  } else if (/\b201[0-9]\b/.test(lowerMessage) || /\b2010s\b/i.test(lowerMessage)) {
    yearFilter = { min: 2010, max: 2019 };
  } else if (/\b202[0-9]\b/.test(lowerMessage) || /\b2020s\b/i.test(lowerMessage)) {
    yearFilter = { min: 2020, max: 2029 };
  } else if (lowerMessage.includes('recent')) {
    yearFilter = { min: 2015, max: 2029 };
  } else if (lowerMessage.includes('old') || lowerMessage.includes('classic')) {
    yearFilter = { min: 1970, max: 1999 };
  }
  
  if (yearFilter) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.year >= (yearFilter.min || 0) && movie.year <= (yearFilter.max || 9999)
    );
  }
  
  // Check for rating keywords (apply AFTER year filter)
  const isHighlyRated = lowerMessage.includes('highly rated') || 
                         lowerMessage.includes('best') || 
                         lowerMessage.includes('top rated') || 
                         lowerMessage.includes('excellent') ||
                         lowerMessage.includes('amazing');
  
  if (isHighlyRated) {
    filteredMovies = filteredMovies.filter(movie => movie.rating >= 4.5);
  }
  
  // Check for specific movie title mentions and prioritize them within filtered results
  const titleMentions = filteredMovies.filter(movie => 
    lowerMessage.includes(movie.title.toLowerCase())
  );
  
  // Only reorder filtered results, never use full movies array
  if (titleMentions.length > 0) {
    const titleIds = new Set(titleMentions.map(m => m.id));
    const priorityMovies = filteredMovies.filter(m => titleIds.has(m.id));
    const otherMovies = filteredMovies.filter(m => !titleIds.has(m.id));
    filteredMovies = [...priorityMovies, ...otherMovies];
  }
  
  console.log(`Found ${filteredMovies.length} relevant movies`);
  console.log('Movie titles:', filteredMovies.map(m => m.title).join(', '));
  
  return filteredMovies;
};

export async function POST(request: NextRequest): Promise<NextResponse<ChatResponse>> {
  try {
    // Check for API key
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error('GROQ_API_KEY is not set');
      return NextResponse.json(
        { error: 'GROQ_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const body: ChatRequestBody = await request.json();

    if (!body.message || typeof body.message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    console.log('User message:', body.message);
    console.log('Conversation history length:', body.history?.length || 0);

    // Find relevant movies using smart filtering
    const relevantMovies = findRelevantMovies(body.message);
    const limitedMovies = relevantMovies.slice(0, 5);
    
    // Build context string and system prompt based on whether movies were found
    let contextString = '';
    let systemPrompt = '';
    
    if (limitedMovies.length > 0) {
      // User asked about movies - give movie context
      contextString = limitedMovies
        .map(movie => `${movie.title} (${movie.year}, ${movie.genre.join('/')}, ${movie.rating}★): ${movie.description}`)
        .join('\n\n');
      
      systemPrompt = `You are CineMatch AI, a friendly movie recommendation assistant.

You can ONLY recommend from these ${limitedMovies.length} movies that match the user's preferences:

${contextString}

CRITICAL FORMATTING RULES:
1. Use numbered list format (1. 2. 3.)
2. First line: Movie Name (Year, Genre, Rating)
3. Next 2-3 lines: Description explaining why it's a good match
4. Add a blank line between each movie
5. Keep descriptions concise and engaging
6. Do NOT recommend movies outside this list
7. Do NOT use bullet points or dashes, only numbered lists
8. VERY IMPORTANT: Never end your response in the middle of a sentence or word
9. If you are running out of tokens, STOP after completing the current movie recommendation fully
10. Never start writing a new movie recommendation if you cannot finish it completely
11. It is better to recommend 2 complete movies than 3 incomplete ones
12. Always end with a complete sentence, never cut off mid-sentence`;
    } else {
      // User asked something unrelated to movies
      systemPrompt = `You are CineMatch AI, a friendly movie recommendation chatbot assistant.

The user asked something that's not related to movies or you couldn't find matching movies in the database.

Respond naturally and helpfully:
- If they ask about you (age, name, how are you, etc): Answer briefly and warmly, then redirect to movies
- If they say random/gibberish words: Politely acknowledge and ask how you can help with movie recommendations
- If it's a greeting (hello, hi, hey): Greet them back warmly and offer to help find movies
- If they ask what you do: Explain you're a movie recommendation assistant
- Keep responses SHORT (2-3 sentences max)
- Always end by offering movie recommendation help

Examples:
User: "What's your age?"
You: "I'm an AI assistant, so I don't have an age! But I'm great at recommending movies. What kind of films do you enjoy?"

User: "kjsdflkjsdf"
You: "I didn't quite catch that! I'm here to help you discover amazing movies. What genre are you in the mood for?"

User: "Hello"
You: "Hello! I'm CineMatch AI, your movie recommendation assistant. I can help you find great films from our collection. What are you in the mood to watch?"

User: "How are you?"
You: "I'm doing great, thanks for asking! Ready to help you find some awesome movies. What kind of films interest you?"`;
    }

    console.log(`Sending ${limitedMovies.length > 0 ? limitedMovies.length : 'no'} movies to AI`);

    // Build messages array with history and current message
    const messages: { role: string; content: string }[] = [
      {
        role: 'system',
        content: systemPrompt,
      },
    ];

    // Add conversation history if available (only last 4 messages)
    const recentHistory = (body.history || []).slice(-4);
    if (recentHistory && recentHistory.length > 0) {
      messages.push(...recentHistory.map(h => ({ role: h.role, content: h.content })));
    }

    // Add current user message
    messages.push({
      role: 'user',
      content: body.message,
    });

    // Call Groq API
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: messages,
          max_tokens: 500,
          temperature: 0.8,
        }),
        signal: controller.signal
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Groq API error:', errorText);
      return NextResponse.json(
        { error: `API error: ${errorText}` },
        { status: response.status }
      );
    }

    const result = await response.json();
    console.log('AI response received');

    const aiMessage = result.choices?.[0]?.message?.content || 
      "I'm having trouble generating a response. Please try again!";

    return NextResponse.json({ message: aiMessage });
  } catch (error) {
    console.error('Chat API error:', error);

    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timeout - AI is taking too long to respond. Please try again.' },
        { status: 504 }
      );
    }

    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    console.error('Error details:', errorMessage);

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
