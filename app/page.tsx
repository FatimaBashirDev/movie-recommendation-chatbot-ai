'use client'

import Link from "next/link";
import { Brain, TrendingUp, Film, MessageSquare, Sparkles, Zap, Target, Shield, Heart, Star } from "lucide-react";
import { movies } from "@/lib/movies";
import Footer from "@/components/Footer";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group p-6 rounded-2xl bg-[#141414] backdrop-blur-lg border border-[#333333] hover:bg-[#1F1F1F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="w-12 h-12 rounded-xl bg-[#E50914]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default function Home() {
  const router = useRouter()
  const featuredMovies = movies.slice(0, 6);

  const handleStartChatting = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      window.location.href = '/chat'
    } else {
      window.location.href = '/login'
    }
  }

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-[#E50914]/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-[#E50914]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414]/50 backdrop-blur-lg border border-[#333333] mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
            <span className="text-sm text-gray-300">Powered by AI</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Discover Your{" "}
            <span className="text-[#E50914]">
              Next Favorite
            </span>{" "}
            Movie
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            AI-powered personalized movie recommendations tailored just for you
          </p>

          {/* CTA Button */}
          <button
            onClick={handleStartChatting}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E50914] text-white font-semibold text-lg hover:bg-[#F40612] transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up cursor-pointer"
            style={{ animationDelay: "0.3s" }}
          >
            <Brain className="w-5 h-5" />
            Start Chatting
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-white/50 animate-scroll" />
          </div>
        </div>
      </section>

      {/* SECTION 1: How It Works (3 Steps) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How CineMatch AI Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get personalized movie recommendations in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group p-8 rounded-2xl bg-[#141414] backdrop-blur-lg border border-[#333333] hover:bg-[#1F1F1F] transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-2xl bg-[#141414] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-8 h-8 text-[#E50914]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Tell Us Your Mood</h3>
              <p className="text-gray-400 text-lg">Describe what you're in the mood to watch</p>
            </div>

            {/* Step 2 */}
            <div className="group p-8 rounded-2xl bg-[#141414] backdrop-blur-lg border border-[#333333] hover:bg-[#1F1F1F] transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-2xl bg-[#141414] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-[#E50914]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Finds Perfect Matches</h3>
              <p className="text-gray-400 text-lg">Our AI analyzes your preferences instantly</p>
            </div>

            {/* Step 3 */}
            <div className="group p-8 rounded-2xl bg-[#141414] backdrop-blur-lg border border-[#333333] hover:bg-[#1F1F1F] transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-2xl bg-[#141414] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-[#E50914]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Discover & Enjoy</h3>
              <p className="text-gray-400 text-lg">Get personalized recommendations in seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Featured Movies (Trending Preview) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Trending This Week
              </h2>
              <p className="text-gray-400 text-lg">
                The most popular movies everyone's watching
              </p>
            </div>
            <Link
              href="/trending"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141414]/50 backdrop-blur-lg border border-[#333333] text-white font-medium hover:bg-[#1F1F1F] transition-all duration-300"
            >
              View All
              <TrendingUp className="w-4 h-4" />
            </Link>
          </div>

          {/* Movie Grid - Horizontal scroll on mobile, 3x2 grid on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMovies.map((movie) => (
              <Link
                key={movie.id}
                href="/trending"
                className="group relative rounded-2xl overflow-hidden bg-[#141414] backdrop-blur-lg border border-[#333333] hover:border-[#E50914]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#E50914]/20"
              >
                {/* Poster Image */}
                <div className="aspect-[2/3] relative overflow-hidden">
                  {movie.poster ? (
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#141414] flex items-center justify-center">
                      <Film className="w-16 h-16 text-white/50" />
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Movie Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1 truncate">{movie.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-300">{movie.rating}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{movie.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Choose CineMatch AI (Features) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose CineMatch AI?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the future of movie discovery with our cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-[#141414] backdrop-blur-lg border border-[#333333] hover:border-[#E50914]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[#E50914]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-[#E50914]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-400 text-lg">Get recommendations in seconds</p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-[#141414] backdrop-blur-lg border border-[#333333] hover:border-[#E50914]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[#E50914]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-[#E50914]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Highly Accurate</h3>
              <p className="text-gray-400 text-lg">AI-powered precision matching</p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-[#141414] backdrop-blur-lg border border-[#333333] hover:border-[#E50914]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[#E50914]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-[#E50914]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">100% Free</h3>
              <p className="text-gray-400 text-lg">No subscriptions, no hidden fees</p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-2xl bg-[#141414] backdrop-blur-lg border border-[#333333] hover:border-[#E50914]/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-[#E50914]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-7 h-7 text-[#E50914]" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">Personalized</h3>
              <p className="text-gray-400 text-lg">Tailored to your unique taste</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl bg-[#141414] backdrop-blur-lg border border-[#333333] p-8 sm:p-12 lg:p-16">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-[#E50914]/30 to-transparent rounded-full blur-3xl" />
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-[#E50914]/30 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Discover Your Next Favorite Movie?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start chatting with our AI assistant now
              </p>
              <button
                onClick={handleStartChatting}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E50914] text-white font-semibold text-lg hover:bg-[#F40612] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E50914]/25 cursor-pointer"
              >
                <Brain className="w-6 h-6" />
                Start Chatting
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className='lg:mt-24'>
              <Footer/>
      </div>
    </div>
  );
}
