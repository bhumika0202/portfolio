import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-scroll';
import bhumikaProfile from '../assets/bhumika_profile.png'; // Need to move/rename the generated image

const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent transition-colors duration-300 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] shadow-2xl">
                <img
                  src={bhumikaProfile}
                  alt="Bhumika Parmar"
                  className="w-full max-w-sm h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-color)] mb-8">
              About <span className="text-sky-500">Me</span>
            </h2>

            <h3 className="text-xl font-semibold text-[var(--text-color)] opacity-90 mb-4">
              Full Stack Developer | MERN Stack
            </h3>

            <p className="text-[var(--text-secondary)] text-sm md:text-base mb-6 leading-relaxed opacity-80">
              Currently working as a Full Stack Developer Intern at Stackdot, Ahmedabad, building real-world web applications in a professional environment. specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and PostgreSQL for full end-to-end development.
            </p>

            <p className="text-[var(--text-secondary)] text-sm md:text-base mb-8 leading-relaxed opacity-80">
              I am passionate about building complete, production-ready web applications — from designing RESTful APIs and managing databases to crafting responsive, user-friendly interfaces. I enjoy solving real-world problems through clean code and well-structured backend logic.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-sky-500/50 transition-all shadow-sm">
                <span className="text-2xl font-bold text-sky-500 block mb-1">1+</span>
                <span className="text-[var(--text-secondary)] text-[10px] uppercase tracking-wider font-bold opacity-60">Years Exp.</span>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-sky-500/50 transition-all shadow-sm">
                <span className="text-2xl font-bold text-sky-500 block mb-1">4+</span>
                <span className="text-[var(--text-secondary)] text-[10px] uppercase tracking-wider font-bold opacity-60">Projects Done</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="contact" smooth={true} className="cosmic-btn cosmic-btn-primary cursor-pointer">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
