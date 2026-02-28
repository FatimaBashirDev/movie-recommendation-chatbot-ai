'use client';

import { Star } from 'lucide-react';
import { movies } from '@/lib/movies';
import Footer from '@/components/Footer';

export default function TrendingPage() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trending Movies
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the most popular movies across all genres, curated just for you.
          </p>
        </div>

        {/* Movie Grid - Netflix Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group cursor-pointer"
            >
              {/* Movie Poster - Netflix aspect ratio (2:3) */}
              <div className="relative overflow-hidden rounded-md shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[2/3] bg-gray-800">
                  <img 
                    src={movie.poster} 
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-xs font-semibold">{movie.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Info - Shows below poster */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold text-white truncate group-hover:text-[#E50914] transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-400">{movie.year}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/30">
                    {movie.genre[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='lg:mt-24'>
        <Footer/>
      </div>
    </div>
  );
}
