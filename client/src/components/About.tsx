import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/useIntersection";

const About = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-light-darker/30 dark:bg-dark-lighter/20"
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={variants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Me</span>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-dark-lighter dark:text-light sm:text-4xl font-sans">The Person Behind The Code</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2
                }
              }
            }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="h-64 md:h-80 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.4
                }
              }
            }}
          >
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h3 className="text-2xl font-bold text-dark-lighter dark:text-light mb-4 font-sans">My Journey</h3>
              <p className="mb-4">
                With over 5 years of experience in full stack development, I've had the opportunity to work on a diverse range of projects from small business websites to enterprise-level applications.
              </p>
              <p className="mb-4">
                My journey began with a Computer Science degree, but my passion for creating elegant solutions to complex problems has driven me to continuously expand my skill set through self-learning and professional development.
              </p>
              <p className="mb-4">
                I specialize in JavaScript ecosystems (React, Node.js), but I'm also proficient with Python, Java, and various database technologies. I believe in writing clean, maintainable code and creating intuitive user experiences.
              </p>
              <p className="mb-6">
                When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new recipes in the kitchen. I bring the same creativity and attention to detail to my personal interests as I do to my development work.
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Problem Solver</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">Team Player</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm font-medium">Fast Learner</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Detail Oriented</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">Creative Thinker</motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
