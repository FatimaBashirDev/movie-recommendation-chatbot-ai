# 🎬 CineMatch AI - Netflix-Style Movie Recommender

An intelligent movie recommendation chatbot powered by AI that helps you discover your next favorite film through natural conversation.

## ✨ Features

- 🤖 **AI-Powered Recommendations** - Chat with Llama 3.2 AI to get personalized movie suggestions
- 🎯 **Smart Filtering** - Advanced RAG (Retrieval Augmented Generation) system ensures accurate recommendations
- 💬 **Conversational Interface** - Natural language processing for human-like interactions
- 🎨 **Netflix-Inspired UI** - Beautiful, responsive design with glassmorphism effects
- ⚡ **Lightning Fast** - Optimized for speed with conversation memory
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎭 **Multi-Genre Support** - Action, Comedy, Drama, Horror, Sci-Fi, Romance, and more
- 🔍 **Advanced Search** - Filter by genre, year, rating, and mood
- 🌙 **Dark Mode** - Eye-friendly dark theme throughout

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS, Lucide Icons
- **AI/ML:** Hugging Face API, Llama 3.2-3B-Instruct
- **Architecture:** RAG (Retrieval Augmented Generation)
- **Deployment:** Vercel
- **State Management:** React Hooks

## 🚀 Live Demo

[View Live Demo](https://aimovie-recommendation-chatbot-l0qxkj90x.vercel.app/)

## 🎯 How It Works

1. **User Input** - Tell the AI what kind of movie you're looking for
2. **Smart Filtering** - RAG system filters 22+ curated movies based on your preferences
3. **AI Generation** - Llama 3.2 creates personalized, conversational recommendations
4. **Instant Results** - Get 3-5 movie suggestions with detailed descriptions in seconds

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- Hugging Face API Key (free)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/netflix-style-ai-movie-recommender.git
cd netflix-style-ai-movie-recommender
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create .env.local file
HUGGINGFACE_API_KEY=your_api_key_here
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 🎨 Pages

- **Home** - Landing page with features and CTA
- **Chat** - AI chatbot interface with conversation memory
- **Trending** - Curated trending movies with Netflix-style cards
- **Browse** - Filter movies by genre with dynamic results
- **About** - How the AI recommendation system works

## 🧠 AI Implementation

This project uses **RAG (Retrieval Augmented Generation)**:

1. **Retrieval:** Smart filtering finds relevant movies from database
2. **Augmentation:** Filtered movies are added as context to AI prompt
3. **Generation:** Llama 3.2 creates natural, conversational recommendations

This ensures the AI only recommends movies from your curated database - no hallucinations!

## 📦 Project Structure
```
├── app/
│   ├── api/chat/route.ts          # AI chatbot API endpoint
│   ├── chat/page.tsx               # Chat interface
│   ├── trending/page.tsx           # Trending movies
│   ├── browse/page.tsx             # Browse with filters
│   ├── about/page.tsx              # About page
│   └── layout.tsx                  # Root layout
├── components/
│   ├── Navbar.tsx                  # Navigation component
│   └── Footer.tsx                  # Footer component
├── lib/
│   └── movies.ts                   # Movie database
└── .env.local                      # Environment variables
```

## 🔐 Environment Variables

Create a `.env.local` file:
```env
HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxx
```

Get your free API key from [Hugging Face](https://huggingface.co/settings/tokens)

## 🎯 Features in Detail

### Conversational AI
- Natural language understanding
- Context-aware responses
- Conversation memory (remembers previous messages)
- Handles off-topic queries gracefully

### Smart Filtering
- Genre detection (Action, Comedy, Drama, etc.)
- Year range filtering (90s, 2000s, recent, classics)
- Rating filters (highly rated, best)
- Title-based search with prioritization

### Optimized Performance
- Limited to 5 movies per query for faster responses
- 4-message conversation history for context efficiency
- 30-second timeout protection
- Optimized token usage (250 max tokens)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [FatimaBashirDev](https://github.com/FatimaBashirDev)
- LinkedIn: [FatimaBashir](https://www.linkedin.com/in/fatima-bashir-b9a538346/)

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for AI API
- [The Movie Database (TMDb)](https://www.themoviedb.org/) for movie posters
- [Vercel](https://vercel.com/) for hosting
- [Next.js](https://nextjs.org/) for the amazing framework

## ⭐ Show your support

Give a ⭐️ if this project helped you learn about AI chatbots and RAG implementation!

---

**Built with ❤️ and AI**
```

---

## **ULTRA-SHORT VERSION (Twitter/LinkedIn):**
```
🎬 Built an AI movie chatbot with Next.js + Hugging Face Llama 3.2!

Features RAG architecture, Netflix-style UI, and conversational recommendations.

Live demo: # 🎬 CineMatch AI - Netflix-Style Movie Recommender

An intelligent movie recommendation chatbot powered by AI that helps you discover your next favorite film through natural conversation.

## ✨ Features

- 🤖 **AI-Powered Recommendations** - Chat with Llama 3.2 AI to get personalized movie suggestions
- 🎯 **Smart Filtering** - Advanced RAG (Retrieval Augmented Generation) system ensures accurate recommendations
- 💬 **Conversational Interface** - Natural language processing for human-like interactions
- 🎨 **Netflix-Inspired UI** - Beautiful, responsive design with glassmorphism effects
- ⚡ **Lightning Fast** - Optimized for speed with conversation memory
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎭 **Multi-Genre Support** - Action, Comedy, Drama, Horror, Sci-Fi, Romance, and more
- 🔍 **Advanced Search** - Filter by genre, year, rating, and mood
- 🌙 **Dark Mode** - Eye-friendly dark theme throughout

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS, Lucide Icons
- **AI/ML:** Hugging Face API, Llama 3.2-3B-Instruct
- **Architecture:** RAG (Retrieval Augmented Generation)
- **Deployment:** Vercel
- **State Management:** React Hooks

## 🚀 Live Demo

[View Live Demo](https://aimovie-recommendation-chatbot-l0qxkj90x.vercel.app/)

## 🎯 How It Works

1. **User Input** - Tell the AI what kind of movie you're looking for
2. **Smart Filtering** - RAG system filters 22+ curated movies based on your preferences
3. **AI Generation** - Llama 3.2 creates personalized, conversational recommendations
4. **Instant Results** - Get 3-5 movie suggestions with detailed descriptions in seconds

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- Hugging Face API Key (free)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/netflix-style-ai-movie-recommender.git
cd netflix-style-ai-movie-recommender
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create .env.local file
HUGGINGFACE_API_KEY=your_api_key_here
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 🎨 Pages

- **Home** - Landing page with features and CTA
- **Chat** - AI chatbot interface with conversation memory
- **Trending** - Curated trending movies with Netflix-style cards
- **Browse** - Filter movies by genre with dynamic results
- **About** - How the AI recommendation system works

## 🧠 AI Implementation

This project uses **RAG (Retrieval Augmented Generation)**:

1. **Retrieval:** Smart filtering finds relevant movies from database
2. **Augmentation:** Filtered movies are added as context to AI prompt
3. **Generation:** Llama 3.2 creates natural, conversational recommendations

This ensures the AI only recommends movies from your curated database - no hallucinations!

## 📦 Project Structure
```
├── app/
│   ├── api/chat/route.ts          # AI chatbot API endpoint
│   ├── chat/page.tsx               # Chat interface
│   ├── trending/page.tsx           # Trending movies
│   ├── browse/page.tsx             # Browse with filters
│   ├── about/page.tsx              # About page
│   └── layout.tsx                  # Root layout
├── components/
│   ├── Navbar.tsx                  # Navigation component
│   └── Footer.tsx                  # Footer component
├── lib/
│   └── movies.ts                   # Movie database
└── .env.local                      # Environment variables
```

## 🔐 Environment Variables

Create a `.env.local` file:
```env
HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxx
```

Get your free API key from [Hugging Face](https://huggingface.co/settings/tokens)

## 🎯 Features in Detail

### Conversational AI
- Natural language understanding
- Context-aware responses
- Conversation memory (remembers previous messages)
- Handles off-topic queries gracefully

### Smart Filtering
- Genre detection (Action, Comedy, Drama, etc.)
- Year range filtering (90s, 2000s, recent, classics)
- Rating filters (highly rated, best)
- Title-based search with prioritization

### Optimized Performance
- Limited to 5 movies per query for faster responses
- 4-message conversation history for context efficiency
- 30-second timeout protection
- Optimized token usage (250 max tokens)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: https://github.com/FatimaBashirDev
- LinkedIn: https://www.linkedin.com/in/fatima-bashir-b9a538346/

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for AI API
- [The Movie Database (TMDb)](https://www.themoviedb.org/) for movie posters
- [Vercel](https://vercel.com/) for hosting
- [Next.js](https://nextjs.org/) for the amazing framework

## ⭐ Show your support

Give a ⭐️ if this project helped you learn about AI chatbots and RAG implementation!

---

**Built with ❤️ and AI**
```

---

## **ULTRA-SHORT VERSION (Twitter/LinkedIn):**
```
🎬 Built an AI movie chatbot with Next.js + Hugging Face Llama 3.2!

Features RAG architecture, Netflix-style UI, and conversational recommendations.

Live demo: https://aimovie-recommendation-chatbot-l0qxkj90x.vercel.app/
GitHub: https://github.com/FatimaBashirDev

#NextJS #AI #MachineLearning #ReactJS
GitHub: https://github.com/FatimaBashirDev

#NextJS #AI #MachineLearning #ReactJS
