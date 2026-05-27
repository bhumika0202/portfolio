import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'BookCraft — Book Publisher Platform',
    description: 'A full-scale backend REST API for a book publishing platform built with Node.js and Express.js. Features JWT authentication, Role-Based Access Control (RBAC), complete book/user/order management, cart and payment workflows, and file uploads via Multer and Cloudinary. Built with PostgreSQL and Prisma ORM for schema modeling and query optimization.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Multer', 'Cloudinary', 'Joi'],
    github: 'https://github.com/bhumika0202/book_publisher',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A fully responsive personal portfolio website built with React.js to showcase projects, technical skills, and professional background. Features a modern UI with Bootstrap, smooth navigation, and is deployed live on Vercel.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Vercel'],
    github: 'https://github.com/bhumika0202/portfolio',
    demo: 'https://bhumika-parmar-portfolio.vercel.app/',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-transparent transition-colors duration-300 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-color)] mb-6"
          >
            Featured <span className="text-sky-500">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed opacity-80"
          >
            These projects reflect my approach to writing clean, maintainable code and building user-friendly interfaces. I've focused on practical solutions that balance performance, usability, and reliability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--card-bg)] rounded-3xl overflow-hidden border border-[var(--border-color)] hover:border-sky-500/30 transition-all duration-500 shadow-xl flex flex-col h-full group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] to-transparent opacity-40"></div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-4 py-1.5 text-[11px] font-medium text-[var(--text-color)] bg-[var(--text-color)]/5 border border-[var(--border-color)] rounded-full hover:border-sky-500/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4 tracking-tight leading-snug">
                  {project.title}
                </h3>

                <p className="text-[var(--text-secondary)] mb-8 text-sm leading-relaxed opacity-70">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold text-sm transition-all shadow-[0_4px_15px_rgba(14,165,233,0.3)] hover:shadow-[0_6px_20px_rgba(14,165,233,0.4)]"
                  >
                    Live Link
                    <ExternalLink size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[var(--text-color)] opacity-70 hover:opacity-100 hover:text-sky-500 transition-all transform hover:scale-110"
                  >
                    <Github size={28} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
