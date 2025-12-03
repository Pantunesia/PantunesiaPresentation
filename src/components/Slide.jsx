import { memo, useState, useEffect, useRef } from 'react';

export const Slide = memo(({ id, isActive, children, animateItems = false, onAnimationComplete, onNextSlide }) => {
  const [visibleItems, setVisibleItems] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const itemsShownRef = useRef(false);

  useEffect(() => {
    if (!isActive) {
      setVisibleItems(0);
      itemsShownRef.current = false;
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
    const itemCount = contentItems.length;
    setTotalItems(itemCount);

    // Check current state to determine action
    if (!itemsShownRef.current) {
      // First click: show all items at once (skip animation)
      itemsShownRef.current = true;
      setVisibleItems(itemCount);
    } else if (visibleItems >= itemCount) {
      // All items already shown, move to next slide on second click
      if (onNextSlide) {
        onNextSlide();
      }
    }
    // During animation (0 < visibleItems < itemCount): disable click event
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

  // Determine if animation is currently in progress
  const isAnimating = animateItems && itemsShownRef.current && visibleItems > 0 && visibleItems < totalItems;

  return (
    <section
      className={`slide ${isActive ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}
      id={`slide-${id}`}
      onClick={handleSlideClick}
      style={{
        cursor: isAnimating ? 'not-allowed' : 'pointer'
      }}
    >
      {children && typeof children === 'function'
        ? children(visibleItems)
        : children}
    </section>
  );
});

Slide.displayName = 'Slide';
