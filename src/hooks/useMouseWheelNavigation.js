import { useEffect, useRef } from 'react';

export const useMouseWheelNavigation = ({ nextSlide, previousSlide }) => {
  const lastWheelTimeRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e) => {
      const currentTime = Date.now();
      const timeDiff = currentTime - lastWheelTimeRef.current;

      // Throttle wheel events to prevent too fast scrolling
      if (timeDiff > 500) {
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          previousSlide();
        }
        lastWheelTimeRef.current = currentTime;
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [nextSlide, previousSlide]);
};
