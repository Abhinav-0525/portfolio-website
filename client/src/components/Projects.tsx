import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/useIntersection";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: Array<{ name: string; color: string }>;
  links: {
    live?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Student Management System",
    description: "A full stack student management system to digitize student records and streamline academic processes.",
    image: "bg-slate-200 dark:bg-slate-700", // Placeholder
    category: "fullstack",
    technologies: [
      { name: "React", color: "bg-primary/80" },
      { name: "Node.js", color: "bg-yellow-500/80" },
      { name: "MongoDB", color: "bg-green-500/80" },
      // { name: "Express.js", color: "bg-red-500/80" },
      { name: "Material UI", color: "bg-purple-500/80" },
      // { name: "Ant Design", color: "bg-primary/80" }
    ],
    links: {
      live: "https://my-class-hub.vercel.app/",
      github: "https://github.com/Abhinav-0525/student-manager"
    }
  },
  {
    id: 2,
    title: "Binary Tree Visualisation Tool",
    description: "An interactive binary tree visualization tool to help users in understanding tree traversals techniques and views.",
    image: "bg-slate-200 dark:bg-slate-700", // Placeholder
    category: "frontend",
    technologies: [
      { name: "React", color: "bg-primary/80" },
      { name: "D3.js", color: "bg-purple-500/80" }
    ],
    links: {
      live: "https://binary-tree-explorer.vercel.app/",
      github: "https://github.com/Abhinav-0525/tree-visualizer"
    }
  },
  {
    id: 3,
    title: "Bank Management System",
    description: "A terminal-based bank transaction system using Java OOP principles to manage user accounts and handle transactions.",
    image: "bg-slate-200 dark:bg-slate-700", // Placeholder
    category: "cli",
    technologies: [
      { name: "Java", color: "bg-purple-500/80" },
      { name: "MySQL", color: "bg-primary/80" },
      { name: "JDBC", color: "bg-green-500/80" }
    ],
    links: {
      // live: "https://example.com",
      github: "https://github.com/Abhinav-0525/Banking-Management-System"
    }
  },
  {
    id: 4,
    title: "Blog Application",
    description: "A dynamic Blog Application that enables user to create, manage, and interact with blog posts seamlessly.",
    image: "bg-slate-200 dark:bg-slate-700", // Placeholder
    category: "fullstack",
    technologies: [
      { name: "React", color: "bg-primary/80" },
      { name: "Node.js", color: "bg-green-500/80" },
      { name: "MongoDB", color: "bg-purple-500/80" },
      
    ],
    links: {
      // live: "https://example.com",
      github: "https://github.com/Abhinav-0525/blog-application"
    }
  },
  // {
  //   id: 5,
  //   title: "Task Management App",
  //   description: "A collaborative task management application with real-time updates, calendar integration, and progress tracking.",
  //   image: "bg-slate-200 dark:bg-slate-700", // Placeholder
  //   category: "web",
  //   technologies: [
  //     { name: "React", color: "bg-primary/80" },
  //     { name: "Redux", color: "bg-purple-500/80" }
  //   ],
  //   links: {
  //     live: "https://example.com",
  //     github: "https://github.com"
  //   }
  // },
  // {
  //   id: 6,
  //   title: "Travel Companion App",
  //   description: "A mobile app for travelers with trip planning, itinerary management, and local recommendations.",
  //   image: "bg-slate-200 dark:bg-slate-700", // Placeholder
  //   category: "mobile",
  //   technologies: [
  //     { name: "Flutter", color: "bg-primary/80" },
  //     { name: "Firebase", color: "bg-green-500/80" }
  //   ],
  //   links: {
  //     live: "https://example.com",
  //     github: "https://github.com"
  //   }
  // }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      className="project-card group bg-white dark:bg-dark-lighter rounded-xl shadow-md overflow-hidden transition-all"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden">
        <div className={`w-full h-60 ${project.image} flex items-center justify-center`}>
          <span className="text-5xl">{project.category === 'fullstack' ? '🌐' : project.category === 'frontend' ? '💻' : project.category === 'cli' ? '⚙️' : '🎨'}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className={`px-2 py-1 text-xs rounded-full ${tech.color} text-white`}>{tech.name}</span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <i className="fas fa-link text-xs"></i>
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <i className="fab fa-github text-xs"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-lighter dark:text-light mb-2">{project.title}</h3>
        <p className="text-dark-lighter/70 dark:text-light-darker/80 mb-4">
          {project.description}
        </p>
        <motion.a 
          href={project.links.live || "#"} 
          className="text-primary font-medium flex items-center hover:underline"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          View Details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState("all");

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

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-light-darker/30 dark:bg-dark-lighter/20"
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">My Work</span>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-dark-lighter dark:text-light sm:text-4xl font-sans">Featured Projects</h2>
          <p className="mt-4 text-xl text-dark-lighter/70 dark:text-light-darker/80">
            A selection of my recent work and personal projects.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          <motion.button 
            className={`project-filter px-4 py-2 rounded-full transition-all ${activeFilter === "all" ? "bg-primary text-white" : "bg-white dark:bg-dark-lighter text-dark-lighter dark:text-light-darker hover:bg-primary/10"}`}
            onClick={() => setActiveFilter("all")}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          <motion.button 
            className={`project-filter px-4 py-2 rounded-full transition-all ${activeFilter === "fullstack" ? "bg-primary text-white" : "bg-white dark:bg-dark-lighter text-dark-lighter dark:text-light-darker hover:bg-primary/10"}`}
            onClick={() => setActiveFilter("fullstack")}
            whileTap={{ scale: 0.95 }}
          >
            Full Stack
          </motion.button>
          <motion.button 
            className={`project-filter px-4 py-2 rounded-full transition-all ${activeFilter === "frontend" ? "bg-primary text-white" : "bg-white dark:bg-dark-lighter text-dark-lighter dark:text-light-darker hover:bg-primary/10"}`}
            onClick={() => setActiveFilter("frontend")}
            whileTap={{ scale: 0.95 }}
          >
            Frontend
          </motion.button>
          <motion.button 
            className={`project-filter px-4 py-2 rounded-full transition-all ${activeFilter === "cli" ? "bg-primary text-white" : "bg-white dark:bg-dark-lighter text-dark-lighter dark:text-light-darker hover:bg-primary/10"}`}
            onClick={() => setActiveFilter("cli")}
            whileTap={{ scale: 0.95 }}
          >
            CLI
          </motion.button>
          {/* <motion.button 
            className={`project-filter px-4 py-2 rounded-full transition-all ${activeFilter === "backend" ? "bg-primary text-white" : "bg-white dark:bg-dark-lighter text-dark-lighter dark:text-light-darker hover:bg-primary/10"}`}
            onClick={() => setActiveFilter("backend")}
            whileTap={{ scale: 0.95 }}
          >
            Backend
          </motion.button> */}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
