
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextRotate } from '@/components/ui/text-rotate';
import { Button } from '@/components/ui/button';

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
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Creative <TextRotate 
              texts={[
                "Web Designer",
                "UI/UX Designer", 
                "Front-end Developer",
                "WordPress Expert"
              ]} 
              mainClassName="text-gold inline-flex"
              rotationInterval={3000}
              staggerDuration={0.03}
              staggerFrom="first"
            /> & Developer
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-black/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Transforming ideas into exceptional digital experiences with creative design and cutting-edge technology.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button 
              variant="default" 
              className="bg-gold hover:bg-gold/90 text-black" 
              onClick={handleScrollToAbout}
            >
              Explore My Work
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-black text-black hover:bg-black hover:text-white"
            >
              Contact Me <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
