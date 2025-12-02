import { useCallback } from 'react';

export const Navigation = ({ currentSlide, totalSlides, onNextSlide, onPreviousSlide, onShowSlide }) => {
  const handleCounterClick = useCallback(() => {
    const slideNumber = prompt(`Jump to slide (1-${totalSlides}):`, currentSlide);
    if (slideNumber) {
      const num = parseInt(slideNumber, 10);
      if (num >= 1 && num <= totalSlides) {
        onShowSlide(num);
      }
    }
  }, [currentSlide, totalSlides, onShowSlide]);

  return (
    <div className="navigation">
      <button className="nav-btn prev-btn" onClick={onPreviousSlide} aria-label="Previous slide">
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="slide-counter" onClick={handleCounterClick} title="Click to jump to a slide">
        <span id="current-slide">{currentSlide}</span> / <span id="total-slides">{totalSlides}</span>
      </div>
      <button className="nav-btn next-btn" onClick={onNextSlide} aria-label="Next slide">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};
