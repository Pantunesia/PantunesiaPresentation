import { useEffect } from 'react';

export const useKeyboardNavigation = ({ nextSlide, previousSlide, showSlide, totalSlides }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          // Check if current slide animation is complete
          const animationState = window.slideAnimationState;
          if (animationState) {
            const slides = Object.values(animationState);
            const activeAnimationSlide = slides.find(s => s.isActive);

            if (activeAnimationSlide && activeAnimationSlide.visibleItems >= activeAnimationSlide.totalItems) {
              // All items shown, move to next slide
              nextSlide();
            } else if (activeAnimationSlide) {
              // Items still to show, just click to show next item
              const activeSlideEl = document.querySelector('.slide.active');
              if (activeSlideEl) {
                activeSlideEl.click();
              }
            } else {
              // No animation, just move to next slide
              nextSlide();
            }
          } else {
            nextSlide();
          }
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          previousSlide();
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
