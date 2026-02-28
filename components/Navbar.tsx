'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface NavLink {
  href: string;
  label: string;
}

interface User {
  email: string | null | undefined;
  user_metadata: {
    name?: string;
    full_name?: string;
  };
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/login', label: 'AI Chat' },
  { href: '/trending', label: 'Trending' },
  { href: '/browse', label: 'Browse' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showUser, setShowUser] = useState(false);

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check auth status
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const showName = localStorage.getItem('showUserName')
      if (session?.user && showName === 'true') {
        setUser(session.user as User)
        setShowUser(true)
      } else {
        setUser(null)
        setShowUser(false)
      }
    }
    getSession()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    localStorage.removeItem('showUserName')
    window.location.href = '/login'
  }

  // Get user display name
  const getUserDisplayName = (): string => {
    if (!user) return '';
    
    // Try to get name from user_metadata (Google login)
    const name = user.user_metadata?.name || user.user_metadata?.full_name;
    if (name) {
      return name.split(' ')[0]; // Get first name
    }
    
    // Fall back to email (part before @)
    if (user.email) {
      return user.email.split('@')[0];
    }
    
    return 'User';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/98 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/90 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Left side - Logo and Nav Links */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Netflix-style Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl md:text-3xl font-bold text-red-600 group-hover:text-red-500 transition-colors">
              N
            </span>
            <span className="hidden sm:block text-lg font-semibold text-white tracking-wide">
              CineMatch
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-white scale-105'
                    : 'text-[#B3B3B3] hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* User section */}
          <div className="flex items-center gap-4">
              {user && showUser ? (
                <>
                  <span className="text-white text-sm">
                    Hi, {getUserDisplayName()}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="cursor-pointer bg-[#E50914] hover:bg-[#F40612] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors "
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className="bg-[#E50914] hover:bg-[#F40612] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Login
                </Link>
              )}
            </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-8 h-8 text-[#B3B3B3] hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#000000]/98 backdrop-blur-md border-t border-[#333333] shadow-xl">
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-[#333333] my-2" />
            {/* Mobile Login/Logout */}
            <div className="px-4 py-3">
              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-center px-4 py-2 bg-[#E50914] hover:bg-[#F40612] text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center px-4 py-2 bg-[#E50914] hover:bg-[#F40612] text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
