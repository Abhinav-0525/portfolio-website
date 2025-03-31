import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-dark-lighter py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold text-primary tracking-tight font-sans">
              <span className="text-light">&lt;</span>JohnDoe<span className="text-light">/&gt;</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <motion.a 
              href="#about" 
              className="text-light-darker hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#skills" 
              className="text-light-darker hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              Skills
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-light-darker hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#volunteer" 
              className="text-light-darker hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              Volunteer
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-light-darker hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </div>
          <div>
            <p className="text-light-darker/60 text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
