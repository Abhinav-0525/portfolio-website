import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-light to-light-darker dark:from-dark dark:to-dark-lighter transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mt-10 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold font-sans text-dark-lighter dark:text-light mb-4">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-dark-lighter/80 dark:text-light-darker/90">Full Stack Developer</h2>
            <p className="text-lg mb-8 max-w-2xl text-dark-lighter/70 dark:text-light-darker/80">
              I build creative digital experiences for the web. Passionate about clean code, user experience, and solving real-world problems through technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 font-medium rounded-lg transition-all transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View my work
              </motion.a>
            </div>
            <div className="mt-8 flex space-x-5">
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-dark-lighter/70 dark:text-light-darker/80 hover:text-primary dark:hover:text-primary transition-colors" 
                aria-label="GitHub"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-github text-2xl"></i>
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-dark-lighter/70 dark:text-light-darker/80 hover:text-primary dark:hover:text-primary transition-colors" 
                aria-label="LinkedIn"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-dark-lighter/70 dark:text-light-darker/80 hover:text-primary dark:hover:text-primary transition-colors" 
                aria-label="Twitter"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-twitter text-2xl"></i>
              </motion.a>
              <motion.a 
                href="https://stackoverflow.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-dark-lighter/70 dark:text-light-darker/80 hover:text-primary dark:hover:text-primary transition-colors" 
                aria-label="Stack Overflow"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-stack-overflow text-2xl"></i>
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-primary to-purple-500 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-light dark:bg-dark">
                  <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-white dark:bg-dark-lighter p-3 rounded-lg shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20, 
                  delay: 0.6 
                }}
              >
                <span className="text-3xl">👨‍💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <motion.a 
            href="#about" 
            className="text-dark-lighter/60 dark:text-light-darker/60 hover:text-primary dark:hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "loop" 
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
