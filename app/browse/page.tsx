'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';
import { movies } from '@/lib/movies';
import Footer from '@/components/Footer';

const genres = ['All', 'Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Thriller'];

export default function BrowsePage() {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const filteredMovies = selectedGenre === 'All'
    ? movies
    : movies.filter((movie) => movie.genre.includes(selectedGenre));

  return (
    <div className="min-h-screen bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32 lg:pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Browse Movies
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Filter by genre to find your perfect match
          </p>
        </div>

        {/* Genre Filter */}
        <div className="mb-10">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedGenre === genre
                    ? 'bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30'
                    : 'bg-[#141414] text-[#B3B3B3] hover:bg-[#1F1F1F] hover:text-white border border-[#333333]'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Movie Count */}
        <p className="text-gray-400 text-center mb-6">
          Showing {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'}
        </p>

        {/* Movie Grid - Netflix Style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="group cursor-pointer animate-fade-in"
            >
              {/* Movie Poster - Netflix aspect ratio */}
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

              {/* Title & Info */}
              <div className="mt-2">
                <h3 className="text-sm font-semibold text-white truncate group-hover:text-[#E50914] transition-colors">
                  {movie.title}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-400">{movie.year}</span>
                  <div className="flex gap-1">
                    {movie.genre.slice(0, 2).map((g) => (
                      <span
                        key={g}
                        className="text-xs px-1.5 py-0.5 rounded bg-[#E50914]/20 text-[#E50914] border border-[#E50914]/30"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMovies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No movies found for this genre.
            </p>
          </div>
        )}
      </div>

     <div className='lg:mt-24'>
             <Footer/>
      </div>
    </div>
  );
}
