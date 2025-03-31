import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useState, useEffect } from 'react';

const AnimatedBackground = () => {
  const { isDarkMode } = useTheme();
  const [particleCount, setParticleCount] = useState(15);
  
  // Adjust particle count based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setParticleCount(8); // Fewer particles for mobile
      } else if (width < 1024) {
        setParticleCount(12); // Medium for tablets
      } else {
        setParticleCount(18); // More for desktop
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Generate an array of particles with random positions
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 3, // between 3 and 11
    duration: Math.random() * 25 + 15, // between 15 and 40 seconds
    delay: Math.random() * 5,
    opacity: Math.random() * 0.3 + 0.1, // between 0.1 and 0.4
  }));

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full blur-md ${
            isDarkMode 
              ? 'bg-primary/10' 
              : 'bg-primary/10'
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}rem`,
            height: `${particle.size}rem`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [
              Math.random() * 70 - 35, 
              Math.random() * 70 - 35, 
              Math.random() * 70 - 35
            ],
            y: [
              Math.random() * 70 - 35, 
              Math.random() * 70 - 35, 
              Math.random() * 70 - 35
            ],
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: [particle.opacity, particle.opacity + 0.1, particle.opacity - 0.05, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
      
      {/* Subtle gradient overlays for depth */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-gradient-to-b from-dark-lighter/0 via-dark-lighter/10 to-dark-lighter/20' 
          : 'bg-gradient-to-b from-light-darker/0 via-light-darker/5 to-light-darker/15'
      }`} />
      
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-dark-lighter/10 via-dark-lighter/0 to-dark-lighter/10' 
          : 'bg-gradient-to-r from-light-darker/5 via-light-darker/0 to-light-darker/5'
      }`} />
    </div>
  );
};

export default AnimatedBackground;