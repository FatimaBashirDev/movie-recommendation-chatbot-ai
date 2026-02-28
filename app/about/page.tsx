'use client';

import { Brain, MessageSquare, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface StepCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TechBadgeProps {
  name: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How accurate are the recommendations?',
    answer: 'Our AI is trained on thousands of movies and user preferences, providing highly personalized suggestions based on your unique taste.',
  },
  {
    question: 'Is it free to use?',
    answer: 'Yes! CineMatch AI is completely free to use. Enjoy unlimited movie recommendations without any cost.',
  },
  {
    question: 'What movies are in the database?',
    answer: 'We cover all major genres from classics to recent releases, ensuring you find movies from any era.',
  },
  {
    question: 'Can I save my favorite recommendations?',
    answer: 'Coming soon! We\'re working on user accounts so you can save and track your favorite movies.',
  },
];

function StepCard({ number, icon, title, description }: StepCardProps) {
  return (
    <div className="relative group bg-[#141414] rounded-2xl p-8 border border-[#333333]/50 hover:border-[#E50914]/50 transition-all duration-300 hover:shadow-xl">
      <div className="absolute -top-4 left-8 w-12 h-12 bg-[#E50914] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {number}
      </div>
      <div className="mt-4">
        <div className="w-16 h-16 bg-[#141414]/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-[#B3B3B3] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TechBadge({ name }: TechBadgeProps) {
  return (
    <div className="px-6 py-3 bg-[#141414] rounded-full border border-[#333333] hover:border-[#E50914]/50 transition-colors">
      <span className="text-[#B3B3B3]">{name}</span>
    </div>
  );
}

function FAQItem({ question, answer }: FAQItem) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <HelpCircle className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">{question}</h4>
          <p className="text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">CineMatch AI</span> Works
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover your next favorite movie powered by cutting-edge AI technology. 
            Get personalized recommendations in three simple steps.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="h-px bg-gray-700 w-16 md:w-32" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Process</h2>
            <div className="h-px bg-gray-700 w-16 md:w-32" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <StepCard
              number={1}
              icon={<MessageSquare className="w-8 h-8 text-purple-400" />}
              title="Tell Us What You Like"
              description="Describe your movie preferences, favorite films, or what you're in the mood for. Our AI understands natural language."
            />
            <StepCard
              number={2}
              icon={<Brain className="w-8 h-8 text-blue-400" />}
              title="AI Analyzes Your Request"
              description="Our Llama 3.2 AI model powered by Hugging Face processes your preferences using advanced machine learning."
            />
            <StepCard
              number={3}
              icon={<Sparkles className="w-8 h-8 text-cyan-400" />}
              title="Get Perfect Recommendations"
              description="Receive personalized movie suggestions tailored to your unique taste, with detailed explanations."
            />
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Powered By Modern Technology
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <TechBadge name="Next.js 14" />
            <TechBadge name="Hugging Face AI" />
            <TechBadge name="Llama 3.2 Model" />
            <TechBadge name="Tailwind CSS" />
            <TechBadge name="TypeScript" />
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 md:p-12 border border-purple-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to find your next favorite movie?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Start chatting with CineMatch AI today and discover movies tailored just for you.
            </p>
            <a
              href="/chat"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
