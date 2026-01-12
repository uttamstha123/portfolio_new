import React from 'react';

const SkillsMarquee = () => {
  const skills = [
    'Laravel',
    'React.js',
    'Node.js',
    'MySQL',
    'JavaScript',
    'C++',
    'Java',
    'HTML/CSS',
    'Bootstrap',
    'REST APIs',
    'Git',
    'jQuery',
    'GSAP',
    'Responsive Design'
  ];

  // Duplicate for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section className="py-12 bg-[#1a2420] overflow-hidden border-y border-white/5">
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a2420] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a2420] to-transparent z-10"></div>

        {/* Marquee Container */}
        <div className="flex animate-marquee hover:pause-marquee">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6"
            >
              <span className="text-4xl md:text-5xl font-black text-white/20 hover:text-[#9fef00] transition-colors duration-300 whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;