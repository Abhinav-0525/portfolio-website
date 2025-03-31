import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { motion } from "framer-motion";
import { Link } from "wouter";

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 bg-light/90 dark:bg-dark/90 backdrop-blur-md z-50 transition-all duration-300 ${
    scrollPosition > 20 ? "shadow-md" : ""
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="#hero" className="text-xl font-bold text-primary tracking-tight font-sans">
              <span className="text-dark dark:text-light">&lt;</span>JohnDoe<span className="text-dark dark:text-light">/&gt;</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-dark-lighter dark:text-light-darker hover:text-primary dark:hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="text-dark-lighter dark:text-light-darker hover:text-primary dark:hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-dark-lighter dark:text-light-darker hover:text-primary dark:hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#volunteer" className="text-dark-lighter dark:text-light-darker hover:text-primary dark:hover:text-primary transition-colors">Volunteer</a></li>
              <li><a href="#contact" className="text-dark-lighter dark:text-light-darker hover:text-primary dark:hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <motion.button 
              id="theme-toggle" 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-lighter transition-colors focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-dark-lighter dark:text-light-darker" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </motion.svg>
            </motion.button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-dark-lighter transition-colors focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dark-lighter dark:text-light-darker" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dark-lighter dark:text-light-darker hover:bg-gray-200 dark:hover:bg-dark-lighter"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dark-lighter dark:text-light-darker hover:bg-gray-200 dark:hover:bg-dark-lighter"
              onClick={closeMobileMenu}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dark-lighter dark:text-light-darker hover:bg-gray-200 dark:hover:bg-dark-lighter"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
            <a 
              href="#volunteer" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dark-lighter dark:text-light-darker hover:bg-gray-200 dark:hover:bg-dark-lighter"
              onClick={closeMobileMenu}
            >
              Volunteer
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dark-lighter dark:text-light-darker hover:bg-gray-200 dark:hover:bg-dark-lighter"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
