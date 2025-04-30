import React, { useState, useEffect, useRef } from "react";

interface NumberCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const NumberCounter: React.FC<NumberCounterProps> = ({ 
  end, 
  suffix = "", 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Set up intersection observer to detect when component is visible
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [end]);

  const animateCount = () => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        // Easing function for smoother animation
        const easedProgress = easeOutExpo(progress);
        const nextCount = Math.floor(startValue + (end - startValue) * easedProgress);
        setCount(nextCount);
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  // Easing function to make the count animation look more natural
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  return <span ref={countRef} className="font-bold">{count}{suffix}</span>;
};

export default NumberCounter;