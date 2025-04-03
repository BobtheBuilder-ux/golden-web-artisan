
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Code } from 'lucide-react';

interface ProjectItemProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  repoLink
}) => {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-black/70 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="skill-tag">{tech}</span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={demoLink} 
            className="button text-sm px-4 py-2 flex items-center gap-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} /> View Project
          </a>
          
          <a 
            href={repoLink} 
            className="px-4 py-2 border border-black text-black text-sm rounded-md hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-1"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github size={16} /> Repository
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const wordpressProjects = [
    {
      title: "Fitness Studio Website",
      description: "Custom WordPress site with class booking system and member portal.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375",
      technologies: ["WordPress", "PHP", "CSS", "JavaScript"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Legal Firm Portal",
      description: "WordPress site with client management and document sharing.",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1512",
      technologies: ["WordPress", "WooCommerce", "PHP", "SCSS"],
      demoLink: "#",
      repoLink: "#",
    },
  ];

  const javascriptProjects = [
    {
      title: "Task Management App",
      description: "Interactive to-do application with sorting and filtering capabilities.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Interactive Map",
      description: "Location-based service with real-time updates and search functionality.",
      image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=1470",
      technologies: ["JavaScript", "Google Maps API", "Firebase", "CSS3"],
      demoLink: "#",
      repoLink: "#",
    },
  ];

  const reactProjects = [
    {
      title: "Recipe Finder",
      description: "React app for discovering recipes based on available ingredients.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1470",
      technologies: ["React", "Context API", "Food API", "Styled Components"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "E-learning Platform",
      description: "Educational platform with course tracking and progress visualization.",
      image: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1373",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      demoLink: "#",
      repoLink: "#",
    },
  ];

  const pythonProjects = [
    {
      title: "Stock Analysis Tool",
      description: "Data analysis application for stock market trends and predictions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470",
      technologies: ["Python", "Pandas", "Matplotlib", "Flask"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Automated Testing Framework",
      description: "Python-based testing suite for web applications with reporting.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470",
      technologies: ["Python", "Selenium", "PyTest", "GitHub Actions"],
      demoLink: "#",
      repoLink: "#",
    },
  ];

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <Tabs defaultValue="wordpress" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-10 bg-transparent">
            <TabsTrigger 
              value="wordpress"
              className="data-[state=active]:bg-gold data-[state=active]:text-black"
            >
              WordPress
            </TabsTrigger>
            <TabsTrigger 
              value="javascript"
              className="data-[state=active]:bg-gold data-[state=active]:text-black"
            >
              JavaScript
            </TabsTrigger>
            <TabsTrigger 
              value="react"
              className="data-[state=active]:bg-gold data-[state=active]:text-black"
            >
              React
            </TabsTrigger>
            <TabsTrigger 
              value="python"
              className="data-[state=active]:bg-gold data-[state=active]:text-black"
            >
              Python
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="wordpress" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wordpressProjects.map((project, index) => (
                <ProjectItem key={index} {...project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="javascript" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {javascriptProjects.map((project, index) => (
                <ProjectItem key={index} {...project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="react" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reactProjects.map((project, index) => (
                <ProjectItem key={index} {...project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="python" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pythonProjects.map((project, index) => (
                <ProjectItem key={index} {...project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
