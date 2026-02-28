import Link from "next/link";
import { Brain, Film, Twitter, Github, Instagram, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141414] border-t-4 border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#E50914] flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CineMatch AI</span>
            </Link>
            <p className="text-[#B3B3B3] text-sm leading-relaxed">
              Your AI-powered movie recommendation companion. Discover your next favorite film instantly.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#333333]/30 flex items-center justify-center text-[#B3B3B3] hover:text-white transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#333333]/30 flex items-center justify-center text-[#B3B3B3] hover:text-white transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#333333]/30 flex items-center justify-center text-[#B3B3B3] hover:text-white transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/trending" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Trending
                </Link>
              </li>
              <li>
                <Link href="/browse" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/chat" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  AI Chat
                </Link>
              </li>
            </ul>
          </div>

          {/* Genres */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Popular Genres</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/browse" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Action
                </Link>
              </li>
              <li>
                <Link href="/browse" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Comedy
                </Link>
              </li>
              <li>
                <Link href="/browse" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Drama
                </Link>
              </li>
              <li>
                <Link href="/browse" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sci-Fi
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-[#B3B3B3] text-sm">
              Get the latest movie recommendations and updates delivered to your inbox.
            </p>
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#333333]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[#B3B3B3] text-sm">
              <Film className="w-4 h-4" />
              <span>© {new Date().getFullYear()} CineMatch AI. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-[#B3B3B3] hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#B3B3B3] hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-[#B3B3B3] hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
