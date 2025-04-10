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
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mb-8 lg:mb-0"
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
            className="w-full lg:w-1/2 px-4 sm:px-6"
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
            <div className="prose prose-base sm:prose-lg max-w-none dark:prose-invert">
              <h3 className="text-xl sm:text-2xl font-bold text-dark-lighter dark:text-light mb-3 sm:mb-4 font-sans">My Journey</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                With a solid background in Information Technology, I’ve been actively building applications that bridge real-world needs. My journey started with Java and expanded into the MERN stack, allowing me to work on wide range of projects.
              </p>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                I'm proficient in Java, JavaScript (React, Node.js), MongoDB, MySQL, and have solved over 250+ DSA problems using Java — a testament to my problem-solving mindset. I believe in writing clean, maintainable code and crafting intuitive user experiences.
              </p>
              {/* <p className="mb-3 sm:mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                Most of the projects I’ve built are solo efforts — from design to deployment — which has sharpened both my technical and self-learning abilities. I'm also experienced with tools like Postman for API testing and Git for version control.
              </p> */}
              <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                When I’m not coding, you’ll find me diving into science fiction, exploring ancient world, or trying out something new in the kitchen. I bring the same curiosity and attention to detail to my hobbies as I do to every line of code I write.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <motion.span whileHover={{ scale: 1.05 }} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">Problem Solver</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-2 sm:px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs sm:text-sm font-medium">Team Player</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-2 sm:px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs sm:text-sm font-medium">Curious</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">Tech Explorer</motion.span>
                <motion.span whileHover={{ scale: 1.05 }} className="px-2 sm:px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-xs sm:text-sm font-medium">Analytical Thinker</motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
