import React from 'react';
import { Heart } from 'lucide-react';

const Footer = ({ currentTime }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1a2420] border-t border-white/5">
      {/* Large Brand Text */}
      <div className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={scrollToTop}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white/10 hover:text-white/20 transition-colors duration-300 leading-none tracking-tighter"
          >
            UTTAM SHRESTHA
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Copyright & Love */}
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>©2025 Uttam Shrestha</span>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart className="text-red-500 fill-current" size={16} />
                <span>in Lucknow, India</span>
              </div>
            </div>

            {/* Right: Time */}
            <div className="text-gray-400 text-sm font-mono">
              {currentTime}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-8 bottom-8 bg-[#9fef00] hover:bg-[#8dd600] text-black p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;