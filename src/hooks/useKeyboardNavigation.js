import { useEffect } from 'react';

export const useKeyboardNavigation = ({ nextSlide, previousSlide, showSlide, totalSlides }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          // Simulate click on active slide (same as click function)
          const activeSlideEl = document.querySelector('.slide.active');
          if (activeSlideEl) {
            activeSlideEl.click();
          }
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          // Check if current slide animation can be reverted
          const backAnimationState = window.slideAnimationState;
          if (backAnimationState) {
            const slides = Object.values(backAnimationState);
            const activeAnimationSlide = slides.find(s => s.isActive);

            if (activeAnimationSlide && activeAnimationSlide.visibleItems > 0) {
              // Items are visible, hide the last one
              activeAnimationSlide.setVisibleItems(activeAnimationSlide.visibleItems - 1);
            } else {
              // No items visible, move to previous slide
              previousSlide();
            }
          } else {
            previousSlide();
          }
          break;
        case 'Home':
          e.preventDefault();
          showSlide(1);
          break;
        case 'End':
          e.preventDefault();
          showSlide(totalSlides);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          window.print();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, previousSlide, showSlide, totalSlides]);
};

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      console.log(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
