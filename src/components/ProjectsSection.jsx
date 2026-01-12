import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'HurryUp Cabs',
      category: 'Laravel',
      tags: ['Full-Stack', 'Live Project'],
      description: 'Developed and launched a live cab booking platform with admin panel using Laravel, MySQL, HTML, CSS, Bootstrap, JavaScript, and jQuery. Features real-time booking, driver management, and payment integration.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      link: 'https://hurryupcabs.com',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery']
    },
    {
      title: 'MedCab Care',
      category: 'Healthcare',
      tags: ['Laravel', 'Live Project'],
      description: 'Contributed to two live healthcare websites and admin panels. Improved site functionality and responsiveness across devices for seamless user experience.',
      image: 'https://images.unsplash.com/photo-1691934286085-c88039d93dae?w=800&h=600&fit=crop',
      link: 'https://medcab.in',
      technologies: ['Laravel', 'JavaScript', 'CSS', 'HTML']
    },
    {
      title: 'Careerwave E-Learning',
      category: 'Education',
      tags: ['Laravel', 'E-Learning'],
      description: 'Built a comprehensive e-learning platform with course management, student enrollment, progress tracking, and interactive learning modules. Responsive design ensures optimal performance.',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop',
      link: '#',
      technologies: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript']
    },
    {
      title: 'Luxury Perfume E-Commerce',
      category: 'E-Commerce',
      tags: ['Laravel', 'Shopping'],
      description: 'Developed a premium e-commerce platform for luxury perfumes with product catalog, shopping cart, secure checkout, and order management system.',
      image: 'https://images.unsplash.com/photo-1760804876422-7efb73b58048?w=800&h=600&fit=crop',
      link: '#',
      technologies: ['Laravel', 'Payment Gateway', 'MySQL']
    },
    {
      title: 'MERN E-Commerce App',
      category: 'Full-Stack',
      tags: ['MERN Stack', 'Portfolio'],
      description: 'Built a complete MERN stack e-commerce application from scratch. Developed responsive layouts using Bootstrap and handled back-end API functionality with Node.js and Express.',
      image: 'https://images.unsplash.com/photo-1649451844931-57e22fc82de3?w=800&h=600&fit=crop',
      link: '#',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'ViLab Co',
      category: 'Client Project',
      tags: ['Laravel', 'Custom'],
      description: 'Custom web solution for ViLab Co with unique business requirements. Focused on user experience and modern design principles.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      link: '#',
      technologies: ['Laravel', 'MySQL', 'JavaScript']
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#2a3a2e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            FEATURED <span className="text-[#9fef00]">PROJECTS</span>
          </h2>
          <p className="text-gray-400 text-lg">Handcrafted solutions that deliver real results</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#1a2420] rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2420] via-[#1a2420]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#9fef00] text-black text-xs font-bold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay */}
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="text-black" size={24} />
                    </div>
                  </a>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-[#9fef00] text-sm font-semibold">{project.category}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;