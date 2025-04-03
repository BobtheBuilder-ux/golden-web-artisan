
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    "WordPress", "HTML5", "CSS3", "JavaScript", 
    "React", "Responsive Design", "UI/UX", "Python",
    "Custom Themes", "Web Animation", "CSS Grid", "Flexbox"
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Web Designer & Developer with 5+ Years of Experience</h3>
            
            <p className="mb-4 text-black/80">
              I'm a passionate web designer specializing in creating beautiful, functional websites 
              that help businesses achieve their goals. With expertise in WordPress, responsive design, 
              and custom themes, I bring a creative approach to every project.
            </p>
            
            <p className="mb-6 text-black/80">
              My design philosophy centers around clean aesthetics, intuitive user experiences, and 
              optimized performance. I believe that great design should not only look good but also 
              solve problems and deliver results.
            </p>
            
            <div className="mb-8">
              <h4 className="font-bold mb-3">My Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <a href="#" className="social-icon" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop" 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <p className="font-bold">5+ Years Experience</p>
                <p className="text-sm text-black/70">Web Design & Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
