
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-right">
            Creative <span className="text-gold">Web Designer</span> & Developer
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-black/80 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Transforming ideas into exceptional digital experiences with creative design and cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button className="button" onClick={handleScrollToAbout}>
              Explore My Work
            </button>
            
            <button className="px-6 py-3 border-2 border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2">
              Contact Me <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
