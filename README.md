Readme · MDCopy🎬 CineMatch AI - Netflix-Style Movie Recommender
An AI-powered movie recommendation chatbot with a Netflix-inspired UI, built with Next.js, Supabase, and Groq API.
🚀 Live Demo
https://movie-recommendation-chatbot-ai.vercel.app

✨ Features

🤖 AI-Powered Recommendations - Chat with Llama 3.3 70B via Groq API for fast, personalized movie suggestions
🎯 Smart Filtering - RAG (Retrieval Augmented Generation) system ensures accurate recommendations from a curated database
💬 Conversational Interface - Natural language processing with conversation memory
🔐 Authentication - Email/password and Google OAuth login powered by Supabase
🛡️ Protected Routes - AI Chat page accessible only after authentication
🎨 Netflix-Inspired UI - Beautiful dark theme with responsive design
📱 Fully Responsive - Works seamlessly on desktop, tablet, and mobile
🎭 Multi-Genre Support - Action, Comedy, Drama, Horror, Sci-Fi, Romance, Thriller, and more
🔍 Advanced Filtering - Filter by genre, year, rating, and mood


🛠️ Tech Stack
TechnologyPurposeNext.js 14 (App Router)React-based full-stack frameworkTypeScriptStatic typing and code reliabilityTailwind CSSUI styling and responsive designSupabaseAuthentication (Email + Google OAuth)Groq API (Llama 3.3 70B)AI-generated movie recommendationsLucide ReactIcon libraryVercelDeployment

🎨 Pages
PageRouteAccessDescriptionHome/PublicLanding page with hero sectionAI Chat/chatProtectedAI-powered movie recommendation interfaceBrowse/browsePublicMovies categorized by genreTrending/trendingPublicPopular and top-rated moviesAbout/aboutPublicHow the recommendation system worksLogin/loginPublicEmail or Google sign inSignup/signupPublicNew user registration

🔐 Authentication Flow

User clicks Start Chatting or visits /chat
Redirected to /login if not authenticated
Login via email/password or Continue with Google
Google OAuth redirects through /auth/callback to exchange session
User is redirected to /chat upon successful login
Authenticated user name displayed in the navbar
Logout available from navbar


🧠 AI Implementation
This project uses RAG (Retrieval Augmented Generation):

Retrieval - Smart filtering finds relevant movies from the curated database based on user input
Augmentation - Filtered movies are injected as context into the AI prompt
Generation - Groq's Llama 3.3 70B model generates natural, conversational recommendations

This ensures the AI only recommends movies from your database — no hallucinations!

📦 Project Structure
├── app/
│   ├── api/chat/route.ts          # Groq AI chatbot API endpoint
│   ├── auth/callback/route.ts     # Supabase OAuth callback handler
│   ├── chat/page.tsx              # Protected AI chat interface
│   ├── browse/page.tsx            # Browse movies by genre
│   ├── trending/page.tsx          # Trending movies page
│   ├── about/page.tsx             # About page
│   ├── login/page.tsx             # Login page
│   ├── signup/page.tsx            # Signup page
│   └── layout.tsx                 # Root layout
├── components/
│   ├── Navbar.tsx                 # Navigation component
│   └── Footer.tsx                 # Footer component
├── lib/
│   ├── movies.ts                  # Curated movie database
│   └── supabase.ts                # Supabase client
└── .env.local                     # Environment variables

🏃‍♂️ Quick Start
Prerequisites

Node.js 18+
Supabase account (free)
Groq API key (free)

Installation

Clone the repository

bashgit clone https://github.com/FatimaBashirDev/movie-recommendation-chatbot-ai.git
cd movie-recommendation-chatbot-ai

Install dependencies

bashnpm install

Set up environment variables — create a .env.local file:

envNEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GROQ_API_KEY=your_groq_api_key

Run the development server

bashnpm run dev

Open http://localhost:3000


🔑 Environment Variables
VariableDescriptionNEXT_PUBLIC_SUPABASE_URLYour Supabase project URLNEXT_PUBLIC_SUPABASE_ANON_KEYYour Supabase anonymous public keyGROQ_API_KEYYour Groq API key for AI responses

⚙️ Supabase Setup

Create a project at supabase.com
Enable Google under Authentication → Providers
Go to Authentication → URL Configuration and set:

Site URL: http://localhost:3000
Redirect URLs: http://localhost:3000/auth/callback


For production, also add your Vercel URL to Redirect URLs


🤝 Contributing
Contributions are welcome! Feel free to submit a Pull Request.

📝 License
This project is open source and available under the MIT License.

👩‍💻 Author
Fatima Bashir — Next.js Developer

GitHub: FatimaBashirDev
LinkedIn: Fatima Bashir


🙏 Acknowledgments

Groq for blazing fast AI inference
Supabase for authentication
Vercel for hosting
Next.js for the framework


Built with ❤️ by Fatima Bashir
