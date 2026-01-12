import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO',
      company: 'HurryUp Cabs',
      image: 'https://i.pravatar.cc/150?img=12',
      text: 'Uttam is very flexible and creative. He developed our entire cab booking platform with exceptional attention to detail. Wonderful to work with and will follow up to ensure you are taken care of. Highly recommend!'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Director',
      company: 'Med Cab Care',
      image: 'https://i.pravatar.cc/150?img=45',
      text: 'It was a pleasure working with Uttam. He created well-designed and effective healthcare websites that beautifully captured our unique services and clearly communicated all of our information. I highly recommend Uttam for your website work.'
    },
    {
      name: 'Amit Verma',
      role: 'Founder',
      company: 'Careerwave',
      image: 'https://i.pravatar.cc/150?img=33',
      text: 'Working with Uttam has been fantastic. He built our e-learning platform from scratch and did an amazing job. Fast, reliable, cost-effective, super responsive, and great attitude. A true professional!'
    },
    {
      name: 'Sneha Patel',
      role: 'Marketing Head',
      company: 'Luxury Perfumes',
      image: 'https://i.pravatar.cc/150?img=47',
      text: 'Uttam is top-notch, very professional and extremely responsive! He is very accepting of your ideas and works with you on how to implement them. Our e-commerce platform exceeded expectations.'
    },
    {
      name: 'Vikram Singh',
      role: 'Product Manager',
      company: 'ViLab Co',
      image: 'https://i.pravatar.cc/150?img=68',
      text: 'Uttam takes care of your website so you can focus on what you do best. He\'s trusted, reliable, and a joy to work with! The custom solution he built for us has been instrumental to our success.'
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-[#1a2420] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            WHAT MY <span className="text-[#9fef00]">CLIENTS SAY</span>
          </h2>
          <p className="text-gray-400 text-lg">Real feedback from real projects</p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-gradient-to-br from-[#2a3a2e] to-[#1e2b22] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            {/* Quote Icon */}
            <div className="mb-6">
              <Quote className="text-[#9fef00] w-12 h-12 fill-current" />
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full border-2 border-[#9fef00]"
              />
              <div>
                <p className="text-white font-bold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-[#9fef00] font-semibold">{testimonials[currentIndex].role}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white hover:bg-[#9fef00] text-black p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white hover:bg-[#9fef00] text-black p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#9fef00] w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonial Strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#2a3a2e] rounded-xl p-6 border border-white/5 hover:border-[#9fef00]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm line-clamp-3">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;