
import { useEffect, useRef, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const ScrambleText = ({ text, className = '', delay = 0 }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => startScramble(), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, isVisible]);

  const startScramble = () => {
    let iteration = 0;
    const maxIterations = 20; // Number of scrambling iterations before revealing text
    
    const interval = setInterval(() => {
      setDisplayText(() => 
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            // After maxIterations, start revealing the actual text
            if (iteration >= maxIterations) {
              return text[index];
            }
            
            // Show random characters during scrambling phase
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      iteration += 1;

      if (iteration > maxIterations + 3) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 50);
  };

  return (
    <span ref={elementRef} className={className}>
      {displayText || text.split('').map(() => ' ').join('')}
    </span>
  );
};

export default ScrambleText;
