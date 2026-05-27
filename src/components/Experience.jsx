import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Development Intern',
      company: 'StackDot, Ahmedabad',
      period: 'Feb 2026 - Present',
      description: [
        'Building a full-scale Book Publisher Platform with JWT authentication, Role-Based Access Control (RBAC), and file upload functionality using Multer and Cloudinary.',
        'Developing RESTful APIs using Node.js and Express.js with PostgreSQL and Prisma ORM for schema modeling and query optimization.',
        'Implementing request validation using Joi and following clean architecture with separated controllers, services, middleware, and routes.',
        'Participating in code reviews and following structured software development workflows in a professional team environment.',
        'Gaining hands-on experience in full-stack application architecture, API design, and production-level database management.',
      ],
      type: 'work'
    },
    {
      title: 'Full Stack Development Trainee',
      company: 'StackCode Training Institute, Ahmedabad',
      period: 'June 2025 - Feb 2026',
      description: [
        'Trained extensively in modern full-stack technologies including React.js, Node.js, Express.js, MongoDB, PostgreSQL, and Prisma ORM.',
        'Built responsive frontend interfaces using React.js, HTML5, CSS3, Bootstrap, and Tailwind CSS, connected to backend REST APIs.',
        'Developed backend applications with RESTful API design, JWT authentication, and database integration using both MongoDB and PostgreSQL.',
        'Worked on real-world projects to strengthen server-side logic, API design, and end-to-end application development skills.',
      ],
      type: 'work'
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      company: 'Saurashtra University | Kamani Science & Prataprai Arts College',
      period: 'Graduated with 71.97%',
      description: ['Focused on core computer science subjects, programming fundamentals, and database management.'],
      type: 'edu'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-transparent transition-colors duration-300 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[var(--text-color)] mb-4"
          >
            My <span className="text-sky-500">Journey</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-sky-500 before:to-transparent"
            >
              {/* Timeline Icon */}
              <div className="absolute left-[-20px] top-0 w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                {item.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
              </div>

              <div className="p-6 md:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-sky-500/30 transition-all group shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--text-color)] group-hover:text-sky-500 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sky-500 font-semibold text-sm md:text-base mt-1">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-500 border border-sky-500/20 text-xs font-bold whitespace-nowrap self-start md:self-center">
                    <Calendar size={14} />
                    {item.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.description.map((desc, i) => (
                    <li key={i} className="flex gap-3 text-[var(--text-secondary)] text-sm md:text-base leading-relaxed opacity-80">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 opacity-60"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
