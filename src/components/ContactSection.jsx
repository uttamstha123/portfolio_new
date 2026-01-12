import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = ({ currentTime }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#1a2420] to-[#2a3a2e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
                HIT ME <span className="text-[#9fef00]">UP</span>
              </h2>
              <p className="text-xl text-gray-300">Submit form or shoot me an email</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-[#9fef00] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:uttamshrestha@example.com"
                    className="text-white text-lg font-semibold hover:text-[#9fef00] transition-colors"
                  >
                    uttamshrestha@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-[#9fef00] p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <User className="text-black" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white text-lg font-semibold">Lucknow, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-white font-bold text-lg mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/uttamshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-[#9fef00] hover:text-black text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/uttamshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-[#9fef00] hover:text-black text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-r from-[#9fef00]/20 to-transparent border border-[#9fef00]/30 rounded-xl p-6">
              <p className="text-[#9fef00] font-bold text-sm mb-2">ACHIEVEMENT</p>
              <p className="text-white font-semibold">
                2nd Position in UTKARSH'23 Technical Event
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Qualified in 'Blind Coding' and secured 2nd position in 'Bug Hunt'
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#1e2b22] rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-[#1a2420] border-white/10 text-white placeholder:text-gray-500 focus:border-[#9fef00] focus:ring-[#9fef00] rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-[#1a2420] border-white/10 text-white placeholder:text-gray-500 focus:border-[#9fef00] focus:ring-[#9fef00] rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me everything!"
                  rows={6}
                  className="bg-[#1a2420] border-white/10 text-white placeholder:text-gray-500 focus:border-[#9fef00] focus:ring-[#9fef00] rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#9fef00] hover:bg-[#8dd600] text-black font-bold py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#9fef00]/50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
                <Send className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;