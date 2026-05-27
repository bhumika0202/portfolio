import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-[var(--bg-secondary)] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[var(--text-color)] mb-4"
          >
            Get In <span className="text-sky-500">Touch</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-[var(--text-color)] mb-6">Let's discuss your project</h3>
            <p className="text-[var(--text-secondary)] text-lg mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-sm block uppercase tracking-widest font-bold">Email Me</span>
                  <a href="mailto:bhumikaparmar.tech@gmail.com" className="text-xl font-semibold text-[var(--text-color)] hover:text-sky-500 transition-colors">
                    bhumikaparmar.tech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-sm block uppercase tracking-widest font-bold">Call Me</span>
                  <a href="tel:+919429551916" className="text-xl font-semibold text-[var(--text-color)] hover:text-sky-500 transition-colors">
                    +91 94295 51916
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="text-[var(--text-secondary)] text-sm block uppercase tracking-widest font-bold">Location</span>
                  <p className="text-xl font-semibold text-[var(--text-color)]">Ahmedabad, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-[var(--text-color)] font-bold mb-6 uppercase tracking-widest text-sm">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, link: 'https://github.com/bhumika0202' },
                  { icon: <Linkedin size={20} />, link: 'https://linkedin.com/in/bhumika-parmar' },
                  // { icon: <Instagram size={20} />, link: '#' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-[var(--card-bg)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-sky-500 hover:text-white border border-[var(--border-color)] hover:border-sky-500 transition-all duration-300 shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-lg"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] focus:border-sky-500 focus:outline-none text-[var(--text-color)] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] focus:border-sky-500 focus:outline-none text-[var(--text-color)] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Web Development"
                  className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] focus:border-sky-500 focus:outline-none text-[var(--text-color)] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] focus:border-sky-500 focus:outline-none text-[var(--text-color)] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full cosmic-btn flex items-center justify-center gap-3 py-5 transition-all ${isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'cosmic-btn-primary'
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={20} />
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-500 font-bold justify-center"
                >
                  <CheckCircle size={20} />
                  Message sent successfully!
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 font-bold justify-center"
                >
                  <AlertCircle size={20} />
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

