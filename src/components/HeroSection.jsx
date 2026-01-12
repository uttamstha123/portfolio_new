import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Navbar from './Navbar';

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#2a3a2e] via-[#1e2b22] to-[#1a2420] overflow-hidden">
      <Navbar />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
              PREMIUM, STORY-FIRST
              <br />
              <span className="text-[#9fef00]">WEB DEVELOPMENT</span>
              <br />
              FOR THE BOLD & ORIGINAL
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Not corporate. Not cookie-cutter. Just handcrafted, scalable solutions
            <br className="hidden md:block" />
            that make your business unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#9fef00] hover:bg-[#8dd600] text-black font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#9fef00]/50"
            >
              <span className="mr-2">get started</span>
              <ArrowRight className="inline" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              browse projects
            </Button>
          </div>

          {/* Hero Image/Mockup */}
          <div className="w-full max-w-5xl mt-16 relative" ref={imageRef}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?w=1200&h=800&fit=crop"
                alt="Developer Workspace"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2420]/80 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full shadow-xl">
              <p className="font-bold text-sm">Full-Stack Developer • MERN & Laravel Expert</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;