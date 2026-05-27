import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'tools', name: 'Tools' },
];

const skills = [
  // Frontend
  {
    name: 'HTML',
    level: 95,
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS',
    level: 95,
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'Javascript',
    level: 95,
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'React',
    level: 90,
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Redux',
    level: 70,
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
  },
  {
    name: 'Next.js',
    level: 70,
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'Tailwind CSS',
    level: 80,
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'Typescript',
    level: 60,
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  // Backend
  {
    name: 'Node.js',
    level: 85,
    category: 'backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Express.js',
    level: 80,
    category: 'backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  {
    name: 'MongoDB',
    level: 85,
    category: 'backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'PostgreSQL',
    level: 80,
    category: 'backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  // Tools
  {
    name: 'Vite',
    level: 85,
    category: 'tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'
  },
  {
    name: 'vercel',
    level: 90,
    category: 'tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg'
  },
  {
    name: 'Postman',
    level: 85,
    category: 'tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-transparent transition-colors duration-300 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-color)] mb-12"
          >
            My <span className="text-sky-500">Skills</span>
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${activeCategory === cat.id
                  ? 'bg-sky-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]'
                  : 'text-[var(--text-secondary)] hover:text-sky-500'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-sky-500/50 transition-all group shadow-lg"
              >
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-xl font-bold text-[var(--text-color)] tracking-tight">{skill.name}</span>
                </div>

                <div className="space-y-2">
                  <div className="h-2 w-full bg-black/40 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-sky-500 rounded-full"
                    />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[var(--text-secondary)] opacity-90">{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
