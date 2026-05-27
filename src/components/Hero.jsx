import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text-color)] mb-8 tracking-tight leading-tight">
            Hi, I'm <span className="text-sky-500">Bhumika</span> Parmar
          </h1>

          <p className="max-w-2xl mx-auto text-[var(--text-secondary)] text-sm md:text-base lg:text-lg mb-12 leading-relaxed font-medium">
            "Full Stack Developer specializing in MERN Stack — building scalable REST APIs and responsive web apps from database to UI"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="projects"
              smooth={true}
              className="px-10 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold text-lg transition-all shadow-[0_4px_20px_rgba(14,165,233,0.4)] hover:shadow-[0_6px_25px_rgba(14,165,233,0.5)] hover:-translate-y-1 cursor-pointer"
            >
              View My work
            </Link>
            <a
              href="/Bhumika_Parmar_cv.pdf"
              download="Bhumika_Parmar_Resume.pdf"
              className="px-10 py-4 border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white rounded-full font-bold text-lg transition-all hover:-translate-y-1"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      <Link
        to="about"
        smooth={true}
        duration={800}
        offset={-70}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[var(--text-secondary)] flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-bold opacity-60 group-hover:opacity-100 transition-opacity">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-sky-500" />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
