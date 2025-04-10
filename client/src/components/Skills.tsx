import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/useIntersection";
import { useState, useEffect } from "react";

interface SkillItemProps {
  name: string;
  percentage: number;
  color: string;
  delay: number;
}

const SkillItem = ({ name, percentage, color, delay }: SkillItemProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="skill-item">
      <div className="flex justify-between mb-1">
        <span className="text-dark-lighter/80 dark:text-light-darker/90">{name}</span>
        <span className="text-dark-lighter/60 dark:text-light-darker/70">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark rounded-full h-2">
        <motion.div 
          className={`h-2 rounded-full`}
          style={{ width: `${width}%`, backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, delay: delay / 1000 }}
        />
      </div>
    </div>
  );
};

const skillCategories = [
  {
    title: "Frontend",
    icon: "fas fa-laptop-code",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    skills: [
      { name: "React", percentage: 85 },
      { name: "JavaScript", percentage: 90 },
      { name: "HTML/CSS", percentage: 85 },
      { name: "Tailwind", percentage: 70 }
    ],
    color: "rgb(239, 68, 68)"
  },
  {
    title: "Backend & Database",
    icon: "fas fa-server",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
    skills: [
      { name: "Node.js", percentage: 90 },
      { name: "Express.js", percentage: 85 },
      { name: "MongoDB", percentage: 90 },
      { name: "MySQL", percentage: 80 },
      // { name: "Python", percentage: 80 },
      // { name: "RESTful APIs", percentage: 90 }
    ],
    color: "rgb(16, 185, 129)"
  },
  // {
  //   title: "Database",
  //   icon: "fas fa-database",
  //   iconBg: "bg-purple-500/10",
  //   iconColor: "text-purple-500",
  //   skills: [
  //     { name: "MongoDB", percentage: 90 },
  //     { name: "MySQL", percentage: 80 },
  //     // { name: "PostgreSQL", percentage: 80 },
  //     // { name: "Redis", percentage: 75 }
  //   ],
  //   color: "rgb(139, 92, 246)"
  // },
  {
    title: "Programming languages",
    icon: "fas fa-terminal",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
    skills: [
      { name: "Java", percentage: 95 },
      { name: "Python", percentage: 80 },
      { name: "C++", percentage: 80 },
      { name: "C", percentage: 90 }
    ],
    color: "rgb(234, 179, 8)"
  },
  // {
  //   title: "Mobile",
  //   icon: "fas fa-mobile-alt",
  //   iconBg: "bg-green-500/10",
  //   iconColor: "text-green-500",
  //   skills: [
  //     { name: "React Native", percentage: 85 },
  //     { name: "Flutter", percentage: 70 },
  //     { name: "iOS/Android", percentage: 65 },
  //     { name: "PWA", percentage: 90 }
  //   ],
  //   color: "rgb(16, 185, 129)"
  // },
  // {
  //   title: "UI/UX",
  //   icon: "fas fa-paint-brush",
  //   iconBg: "bg-purple-500/10",
  //   iconColor: "text-purple-500",
  //   skills: [
  //     { name: "Figma", percentage: 85 },
  //     { name: "Responsive Design", percentage: 90 },
  //     { name: "Adobe XD", percentage: 75 },
  //     { name: "Sass/SCSS", percentage: 80 }
  //   ],
  //   color: "rgb(139, 92, 246)"
  // }
];

const Skills = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      id="skills" 
      className="py-20 bg-light dark:bg-dark"
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">My Expertise</span>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-dark-lighter dark:text-light sm:text-4xl font-sans">Technical Skills</h2>
          <p className="mt-4 text-xl text-dark-lighter/70 dark:text-light-darker/80">
            A collection of technologies I've worked with and mastered over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              className="bg-white dark:bg-dark-lighter rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${category.iconBg} p-3 rounded-lg mr-4`}>
                    <i className={`${category.icon} ${category.iconColor} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-dark-lighter dark:text-light">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem 
                      key={skill.name}
                      name={skill.name}
                      percentage={skill.percentage}
                      color={category.color}
                      delay={(categoryIndex * 100) + (skillIndex * 200)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
