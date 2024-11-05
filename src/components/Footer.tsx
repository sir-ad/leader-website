import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-navy-900">
              Adarsh Agrahari
            </Link>
            <p className="mt-2 text-navy-600">
              Product Leader • Innovation Catalyst • Author
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-navy-600 hover:text-navy-900 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-100 text-center text-navy-600">
          <p>© {currentYear} Adarsh Agrahari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;