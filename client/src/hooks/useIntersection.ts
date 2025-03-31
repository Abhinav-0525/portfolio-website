import { useState, useEffect, useRef } from "react";

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersection = (options: IntersectionOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: options.threshold || 0,
      rootMargin: options.rootMargin || "0px",
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isIntersecting };
};
