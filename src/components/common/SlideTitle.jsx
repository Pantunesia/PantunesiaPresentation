import { useState, useEffect } from 'react';

export const SlideTitle = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Reset animation by removing and re-adding the class
    setIsAnimating(false);
    // Use setTimeout to trigger reflow and restart animation
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 10);

    return () => clearTimeout(timer);
  }, [children]);

  return <h2 className={`slide-title ${isAnimating ? 'animate' : ''}`}>{children}</h2>;
};
