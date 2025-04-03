
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
  demoLink: string;
  repoLink: string;
}

const Portfolio: React.FC = () => {
  // Sample projects data
  const projectsData: Project[] = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive WordPress e-commerce site with custom product pages and checkout flow.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470",
      categories: ["WordPress"],
      technologies: ["WordPress", "WooCommerce", "CSS", "PHP"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 2,
      title: "Restaurant Booking App",
      description: "Interactive JavaScript application for restaurant table reservations with real-time availability.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470",
      categories: ["JavaScript"],
      technologies: ["JavaScript", "HTML5", "CSS3", "Firebase"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Clean and modern React-based portfolio for a professional photographer.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469",
      categories: ["React"],
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Python-powered data visualization tool with interactive charts and filtering options.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470",
      categories: ["Python"],
      technologies: ["Python", "Flask", "D3.js", "PostgreSQL"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 5,
      title: "Corporate Website",
      description: "WordPress site for a financial services company with custom theme and interactive features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415",
      categories: ["WordPress"],
      technologies: ["WordPress", "JavaScript", "SCSS", "PHP"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 6,
      title: "Weather App",
      description: "React application that provides real-time weather updates with location detection.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1374",
      categories: ["React", "JavaScript"],
      technologies: ["React", "JavaScript", "Weather API", "CSS"],
      demoLink: "#",
      repoLink: "#",
    },
  ];

  const categories = ["All", "WordPress", "JavaScript", "React", "Python"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="portfolio" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category 
                  ? "bg-gold text-black" 
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group animate-scale-in">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="project-overlay">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 text-white/80">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-white/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center gap-1 bg-gold text-black px-3 py-1 rounded font-medium text-sm hover:bg-gold/80 transition-colors"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                  <a 
                    href={project.repoLink} 
                    className="flex items-center gap-1 bg-white text-black px-3 py-1 rounded font-medium text-sm hover:bg-white/80 transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
