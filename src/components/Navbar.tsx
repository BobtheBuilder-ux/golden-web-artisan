
import React, { useEffect, useState } from 'react';
import { Home, User, Briefcase, Mail, FolderIcon } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'portfolio', 'projects', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Portfolio', url: '/portfolio', icon: FolderIcon },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: Mail }
  ];

  return <NavBar items={navItems} />;
};

export default Navbar;
