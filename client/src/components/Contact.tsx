import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/useIntersection";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

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

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-light-darker/30 dark:bg-dark-lighter/20"
      ref={ref}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-dark-lighter dark:text-light sm:text-4xl font-sans">Let's Work Together</h2>
          <p className="mt-4 text-xl text-dark-lighter/70 dark:text-light-darker/80">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-lighter dark:text-light-darker">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className={`mt-1 block w-full px-4 py-3 bg-white dark:bg-dark-lighter border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-lighter dark:text-light-darker">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your.email@example.com" 
                  className={`mt-1 block w-full px-4 py-3 bg-white dark:bg-dark-lighter border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-lighter dark:text-light-darker">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="What's this about?" 
                  className={`mt-1 block w-full px-4 py-3 bg-white dark:bg-dark-lighter border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-lighter dark:text-light-darker">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Your message..." 
                  className={`mt-1 block w-full px-4 py-3 bg-white dark:bg-dark-lighter border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                  {...register("message", { 
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message should be at least 10 characters"
                    }
                  })}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>
              <div>
                <motion.button 
                  type="submit" 
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-dark-lighter rounded-xl shadow-md overflow-hidden h-full">
              <div className="p-6 space-y-8 h-full flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold text-dark-lighter dark:text-light mb-4 font-sans">Contact Information</h3>
                  <p className="text-dark-lighter/70 dark:text-light-darker/80 mb-8">
                    I'm currently available for software developer intern opportunities. Let's create something amazing together!
                  </p>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <p className="text-sm text-dark-lighter/50 dark:text-light-darker/50">Email</p>
                      <a href="mailto:john.doe@example.com" className="text-dark-lighter dark:text-light-darker hover:text-primary dark:hover:text-primary transition-colors">abhinavsai.janipireddy@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <i className="fas fa-map-marker-alt text-green-500"></i>
                    </div>
                    <div>
                      <p className="text-sm text-dark-lighter/50 dark:text-light-darker/50">Location</p>
                      <p className="text-dark-lighter dark:text-light-darker">Hyderabad, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <i className="fas fa-clock text-purple-500"></i>
                    </div>
                    <div>
                      <p className="text-sm text-dark-lighter/50 dark:text-light-darker/50">Availability</p>
                      <p className="text-dark-lighter dark:text-light-darker">Intern</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-dark-lighter dark:text-light mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="https://github.com/Abhinav-0525" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-github"></i>
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/abhinavsai07/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-linkedin"></i>
                    </motion.a>
                    <motion.a 
                      href="https://x.com/AbhinavSai25" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-twitter"></i>
                    </motion.a>
                    {/* <motion.a 
                      href="https://stackoverflow.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-stack-overflow"></i>
                    </motion.a> */}
                    {/* <motion.a 
                      href="https://dev.to" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-dev"></i>
                    </motion.a> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
