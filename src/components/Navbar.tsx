
import React from 'react';
import { Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Portfolio', url: '#portfolio', icon: Briefcase },
    { name: 'Projects', url: '#projects', icon: FileText },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  return <NavBar items={navItems} />;
};

export default Navbar;
