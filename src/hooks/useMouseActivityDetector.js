import { useEffect, useState } from 'react';

export const useMouseActivityDetector = (inactivityTimeout = 3000) => {
  const [isMouseActive, setIsMouseActive] = useState(true);

  useEffect(() => {
    let inactivityTimer;

    const handleMouseMove = () => {
      setIsMouseActive(true);
      clearTimeout(inactivityTimer);

      // Set timer to hide UI after inactivity
      inactivityTimer = setTimeout(() => {
        setIsMouseActive(false);
      }, inactivityTimeout);
    };

    const handleMouseLeave = () => {
      clearTimeout(inactivityTimer);
      setIsMouseActive(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(inactivityTimer);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [inactivityTimeout]);

  return isMouseActive;
};
