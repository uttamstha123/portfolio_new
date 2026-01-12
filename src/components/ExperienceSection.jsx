import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Senior Web Developer',
      company: 'Innovative Modern Engineers',
      location: 'Lucknow, India',
      type: 'In-office',
      period: 'July 2024 – August 2025',
      current: false,
      achievements: [
        'Developed and launched live cab booking platform HurryUp Cabs and admin panel',
        'Contributed to multiple client-based projects including e-learning and e-commerce applications',
        'Ensured responsive design and optimal performance across all platforms',
        'Key Projects: Careerwave | E-commerce (Perfume) | US based cab service | ViLab Co'
      ],
      technologies: ['Laravel', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery']
    },
    {
      role: 'Web Development Intern',
      company: 'Med Cab Care Pvt. Ltd.',
      location: 'Lucknow, India',
      type: 'In-office',
      period: 'August 2023 - March 2024',
      current: false,
      achievements: [
        'Contributed to development of two live websites and admin panels',
        'Improved site functionality and responsiveness across devices',
        'Implemented modern UI/UX principles for healthcare platforms'
      ],
      technologies: ['Laravel', 'HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
      role: 'Full-Stack Development Intern',
      company: 'Tridashay Private Limited',
      location: 'Remote',
      type: 'Work from Home',
      period: 'January 2023 - May 2023',
      current: false,
      achievements: [
        'Built MERN stack e-commerce application from scratch',
        'Developed responsive layouts using Bootstrap',
        'Handled back-end API functionality with Node.js',
        'Created blog page API demonstrating REST principles'
      ],
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#2a3a2e] to-[#1a2420]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            WORK <span className="text-[#9fef00]">EXPERIENCE</span>
          </h2>
          <p className="text-gray-400 text-lg">Building solutions that make a difference</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#9fef00] via-[#9fef00]/50 to-transparent"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#9fef00] rounded-full border-4 border-[#1a2420] z-10"></div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 bg-[#1e2b22] rounded-2xl p-6 border border-white/5 hover:border-[#9fef00]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#9fef00]/10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-[#9fef00] font-semibold">{exp.company}</p>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-gray-400 text-sm">{exp.location}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400 text-sm">{exp.type}</span>
                      </div>
                    </div>
                    <div className="bg-[#9fef00]/10 p-3 rounded-lg">
                      <Briefcase className="text-[#9fef00]" size={24} />
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-[#9fef00] mt-1 flex-shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-[#1e2b22] rounded-2xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
            <p className="text-[#9fef00] font-semibold text-lg">Bachelor of Technology</p>
            <p className="text-gray-300">Computer Science and Engineering (B.Tech.)</p>
            <p className="text-gray-400 text-sm mt-2">BBDEC (AKTU University) • 2021 – 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;