import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] py-12 border-t border-[var(--border-color)] transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[var(--text-secondary)] text-sm font-medium opacity-80 uppercase tracking-widest">
          © {currentYear} Bhumika Portfolio. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
