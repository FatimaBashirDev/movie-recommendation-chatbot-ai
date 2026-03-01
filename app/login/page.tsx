'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Chrome } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

// Debug: Log Supabase URL on component mount
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    console.log('Login attempt with email:', email);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log('Supabase response error:', error);
    console.log('Supabase response data:', data);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      console.log('Login successful, redirecting to chat...')
      localStorage.setItem('showUserName', 'true')
      window.location.href = '/chat'
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    localStorage.setItem('showUserName', 'true');

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#000000] relative">
      {/* Netflix-style background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Header with Netflix Logo */}
      <div className="relative z-10">
        <header className="py-5 px-8">
         
        </header>
      </div>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="w-full max-w-md bg-black/75 rounded p-16">
          <h1 className="text-3xl font-bold text-white mb-8">Sign In</h1>
          
          <form onSubmit={handleEmailLogin} className="space-y-5">
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="w-full px-5 py-4 rounded bg-[#333333] text-white placeholder-transparent peer focus:outline-none focus:bg-[#454545] transition-colors"
                id="email-input"
                required
              />
              <label htmlFor="email-input" className="absolute left-5 top-4 text-base text-[#8c8c8c] pointer-events-none transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-[#8c8c8c] peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#8c8c8c]">
                Email or phone number
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                className="w-full px-5 py-4 rounded bg-[#333333] text-white placeholder-transparent peer focus:outline-none focus:bg-[#454545] transition-colors"
                id="password-input"
                required
              />
              <label htmlFor="password-input" className="absolute left-5 top-4 text-base text-[#8c8c8c] pointer-events-none transition-all peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-[#8c8c8c] peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#8c8c8c]">
                Password
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-white text-sm bg-[#E50914] rounded p-3">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded bg-[#E50914] text-white font-semibold hover:bg-[#F40612] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* OR Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#333333]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#000000] text-[#8c8c8c]">OR</span>
            </div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full py-3 rounded bg-[#333333] border border-[#333333] text-white font-medium hover:bg-[#454545] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Chrome className="w-5 h-5" />
            Continue with Google
          </button>

          {/* Sign Up Link */}
          <div className="mt-8">
            <p className="text-[#8c8c8c] text-base">
              New to CineMatch AI?{' '}
              <Link href="/signup" className="text-white hover:text-[#b3b3b3] font-medium">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
