import { memo, useState, useEffect } from 'react';

export const Slide = memo(({ id, isActive, children, animateItems = false, onAnimationComplete, onNextSlide, noAutoNext = false }) => {
  const [visibleItems, setVisibleItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setVisibleItems(0);
    }
  }, [isActive]);

  const handleSlideClick = () => {
    if (!isActive) return;

    // If no animation items, just go to next slide
    if (!animateItems) {
      if (onNextSlide) {
        onNextSlide();
      }
      return;
    }

    const contentItems = document.querySelectorAll(`#slide-${id} [data-animate-item]`);
    setTotalItems(contentItems.length);

    if (visibleItems < contentItems.length) {
      setVisibleItems(visibleItems + 1);
    } else if (visibleItems >= contentItems.length && onNextSlide && !noAutoNext) {
      // All items shown, move to next slide (unless noAutoNext is true)
      onNextSlide();
    }
  };

  // Check if all items are visible and trigger callback
  useEffect(() => {
    if (animateItems && isActive && totalItems > 0 && visibleItems >= totalItems) {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }
  }, [visibleItems, totalItems, animateItems, isActive, onAnimationComplete]);

  // Expose animation state for this slide
  useEffect(() => {
    window.slideAnimationState = window.slideAnimationState || {};
    if (animateItems) {
      window.slideAnimationState[id] = { visibleItems, setVisibleItems, totalItems, isActive };
    }
  }, [id, visibleItems, animateItems, isActive, totalItems]);

  return (
    <section
      className={`slide ${isActive ? 'active' : ''}`}
      id={`slide-${id}`}
      onClick={handleSlideClick}
      style={{ cursor: 'pointer' }}
    >
      {children && typeof children === 'function'
        ? children(visibleItems)
        : children}
    </section>
  );
});

Slide.displayName = 'Slide';
