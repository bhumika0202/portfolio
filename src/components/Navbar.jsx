import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-color)]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
        <Link to="home" smooth={true} className="text-2xl font-bold text-[var(--text-color)] cursor-pointer tracking-tight">
          Bhumika <span className="text-sky-500">Portfolio</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-[var(--text-color)] hover:text-sky-500 font-medium transition-colors cursor-pointer text-sm"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-[var(--text-color)]/10 transition-colors text-sky-500 ml-4"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-[var(--text-color)]/10 transition-colors text-sky-500"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[var(--text-color)] p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-[var(--bg-color)] transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8 z-[-1] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl text-[var(--text-color)] hover:text-sky-500 font-semibold"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
