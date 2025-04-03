
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gold">Web</span>Designer
            </h3>
            <p className="mb-6 text-white/70">
              Creating beautiful, functional websites that help businesses achieve their goals.
              Let's build something amazing together.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gold hover:bg-gold hover:text-black transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gold hover:bg-gold hover:text-black transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gold hover:bg-gold hover:text-black transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gold hover:bg-gold hover:text-black transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-gold hover:bg-gold hover:text-black transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-gold transition-colors">About Me</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-gold transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-gold transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-gold">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-gold" />
                <span className="text-white/70">contact@webdesigner.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Github size={18} className="text-gold" />
                <span className="text-white/70">github.com/webdesigner</span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={18} className="text-gold" />
                <span className="text-white/70">linkedin.com/in/webdesigner</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70">© {currentYear} Web Designer. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 px-4 py-2 rounded-md bg-gold text-black hover:bg-gold/80 transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
