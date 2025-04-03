
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, LayoutGroup } from 'framer-motion';
import { TextRotate } from './ui/text-rotate';
import Floating, { FloatingElement } from './ui/parallax-floating';

// Portfolio project images
const portfolioImages = [
  {
    url: "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
    title: "E-commerce Website",
  },
  {
    url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    title: "Portfolio Design",
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    title: "Business Website",
  },
  {
    url: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8",
    title: "Mobile App Design",
  },
  {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    title: "SaaS Platform",
  },
];

const Hero: React.FC = () => {
  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="w-full h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070')] bg-cover bg-center opacity-10 z-0"></div>
      
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={portfolioImages[0].url}
            alt={portfolioImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={portfolioImages[1].url}
            alt={portfolioImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.img
            src={portfolioImages[2].url}
            alt={portfolioImages[2].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.img
            src={portfolioImages[3].url}
            alt={portfolioImages[3].title}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.img
            src={portfolioImages[4].url}
            alt={portfolioImages[4].title}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-10 pointer-events-auto">
        <motion.h1
          className="text-3xl md:text-6xl lg:text-7xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>Creative </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <TextRotate
                texts={[
                  "Web Designer",
                  "Developer",
                  "Craftsman",
                  "Coder",
                  "Creator",
                  "Problem Solver",
                  "UI Expert",
                  "Innovator"
                ]}
                mainClassName="overflow-hidden pr-3 text-gold py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-black/80 mt-6"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Transforming ideas into exceptional digital experiences with creative design and cutting-edge technology.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <motion.button 
            className="button"
            onClick={handleScrollToAbout}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.7 }}
          >
            Explore My Work
          </motion.button>
          
          <motion.button 
            className="px-6 py-3 border-2 border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
          >
            Contact Me <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
