import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/useIntersection";

interface VolunteerExperience {
  id: number;
  title: string;
  period: string;
  description: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  tags: Array<{ name: string; color: string }>;
}

const volunteerExperiences: VolunteerExperience[] = [
  {
    id: 1,
    title: "Code for Good Hackathon Mentor",
    period: "2021 - Present",
    description: "Mentored student teams during hackathons focused on developing solutions for non-profit organizations. Provided technical guidance, code reviews, and helped teams implement best practices.",
    icon: "fas fa-laptop-code",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    tags: [
      { name: "Web Development", color: "bg-primary/10 text-primary" },
      { name: "Mentoring", color: "bg-green-500/10 text-green-500" }
    ]
  },
  {
    id: 2,
    title: "Coding Workshop Instructor",
    period: "2020 - Present",
    description: "Conducted monthly coding workshops for underrepresented youth at local community centers. Developed curriculum, taught web development basics, and mentored students on personal projects.",
    icon: "fas fa-chalkboard-teacher",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
    tags: [
      { name: "Education", color: "bg-green-500/10 text-green-500" },
      { name: "HTML/CSS", color: "bg-primary/10 text-primary" },
      { name: "JavaScript", color: "bg-purple-500/10 text-purple-500" }
    ]
  },
  {
    id: 3,
    title: "Non-Profit Website Developer",
    period: "2019 - 2021",
    description: "Designed and developed websites for local non-profit organizations to improve their online presence. Provided ongoing maintenance and trained staff on content management systems.",
    icon: "fas fa-globe",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    tags: [
      { name: "WordPress", color: "bg-purple-500/10 text-purple-500" },
      { name: "Web Design", color: "bg-primary/10 text-primary" },
      { name: "SEO", color: "bg-green-500/10 text-green-500" }
    ]
  },
  {
    id: 4,
    title: "Tech Community Organizer",
    period: "2018 - Present",
    description: "Co-organized local tech meetups and events to foster knowledge sharing and networking. Coordinated speakers, venues, and promoted diversity and inclusion in the tech community.",
    icon: "fas fa-users",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    tags: [
      { name: "Event Planning", color: "bg-primary/10 text-primary" },
      { name: "Community Building", color: "bg-green-500/10 text-green-500" }
    ]
  }
];

const Volunteer = () => {
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
      id="volunteer" 
      className="py-20 bg-light dark:bg-dark"
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Giving Back</span>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-dark-lighter dark:text-light sm:text-4xl font-sans">Volunteer Experience</h2>
          <p className="mt-4 text-xl text-dark-lighter/70 dark:text-light-darker/80">
            Contributing my skills to make a positive impact in the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteerExperiences.map(experience => (
            <motion.div 
              key={experience.id}
              className="bg-white dark:bg-dark-lighter rounded-xl shadow-md overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${experience.iconBg} p-3 rounded-lg`}>
                    <i className={`${experience.icon} ${experience.iconColor} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-lighter dark:text-light mb-1">{experience.title}</h3>
                    <p className="text-primary mb-2">{experience.period}</p>
                    <p className="text-dark-lighter/70 dark:text-light-darker/80 mb-4">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag, index) => (
                        <motion.span 
                          key={index} 
                          className={`px-3 py-1 ${tag.color} rounded-full text-sm font-medium`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Volunteer;
