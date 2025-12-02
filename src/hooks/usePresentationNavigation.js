import { useState, useCallback } from 'react';

export const usePresentationNavigation = (totalSlides) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const showSlide = useCallback((slideNumber) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev < totalSlides) {
        return prev + 1;
      }
      return prev;
    });
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  }, [totalSlides]);

  const updateProgress = useCallback(() => {
    return (currentSlide / totalSlides) * 100;
  }, [currentSlide, totalSlides]);

  return {
    currentSlide,
    totalSlides,
    showSlide,
    nextSlide,
    previousSlide,
    updateProgress,
  };
};
