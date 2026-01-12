import React from 'react';
import { Code2, Laptop, Server, Database } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#1a2420] to-[#2a3a2e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-[#9fef00]/10 border border-[#9fef00]/30 rounded-full">
            <span className="text-[#9fef00] font-semibold text-sm uppercase tracking-wide">Why Choose Me?</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              AS A <span className="text-[#9fef00]">FULL-STACK DEVELOPER</span>,
              I BRING THE FLEXIBILITY, SPEED, AND PERSONAL CARE YOUR BUSINESS DESERVES
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Recently graduated computer science professional with a strong passion for software 
                development and a solid foundation in programming languages including Java, C++, and JavaScript.
              </p>
              <p>
                Demonstrated experience in building and deploying web applications, effectively translating 
                complex requirements into functional software solutions. From e-commerce platforms to healthcare 
                systems and cab booking applications - I build websites that have life, trust, results, and long-term growth.
              </p>
              <p className="text-white font-semibold">
                I don't build that corporate junk. I build trust, results, and long-term growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <p className="text-4xl font-black text-[#9fef00]">6+</p>
                <p className="text-gray-400">Live Projects</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-black text-[#9fef00]">2+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right: Image & Tech Icons */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?w=600&h=800&fit=crop"
                alt="Developer at work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2420]/90 via-transparent to-transparent"></div>
            </div>

            {/* Floating Tech Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="bg-[#9fef00] p-3 rounded-lg">
                  <Code2 className="text-black" size={24} />
                </div>
                <div>
                  <p className="font-bold text-black">Full-Stack</p>
                  <p className="text-xs text-gray-600">MERN & Laravel</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-[#9fef00] p-4 rounded-xl shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="bg-black p-3 rounded-lg">
                  <Database className="text-[#9fef00]" size={24} />
                </div>
                <div>
                  <p className="font-bold text-black">Database</p>
                  <p className="text-xs text-black/70">MySQL Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;