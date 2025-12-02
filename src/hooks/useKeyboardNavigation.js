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
          // Move to previous slide (no animation logic, just go back)
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
