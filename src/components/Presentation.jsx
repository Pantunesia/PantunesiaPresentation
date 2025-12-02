import { usePresentationNavigation } from '../hooks/usePresentationNavigation';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { useTouchNavigation } from '../hooks/useTouchNavigation';
import { useMouseWheelNavigation } from '../hooks/useMouseWheelNavigation';

import { ProgressBar } from './ProgressBar';
import { Navigation } from './Navigation';
import logoBudaya from '../assets/logo-budaya.png';

import { Slide1Title } from './slides/Slide1Title';
import { Slide2Team } from './slides/Slide2Team';
import { Slide3Background } from './slides/Slide3Background';
import { Slide4Problems } from './slides/Slide4Problems';
import { Slide5Solution } from './slides/Slide5Solution';
import { Slide6Modes } from './slides/Slide6Modes';
import { Slide7AIEvaluator } from './slides/Slide7AIEvaluator';
import { Slide8Gamification } from './slides/Slide8Gamification';
import { Slide9Advantages1 } from './slides/Slide9Advantages1';
import { Slide10Advantages2 } from './slides/Slide10Advantages2';
import { Slide11Demo } from './slides/Slide11Demo';
import { Slide12Impact } from './slides/Slide12Impact';
import { Slide13LongTermImpact } from './slides/Slide13LongTermImpact';
import { Slide14RoadmapQ1 } from './slides/Slide14RoadmapQ1';
import { Slide15RoadmapQ2 } from './slides/Slide15RoadmapQ2';
import { Slide16RoadmapQ3 } from './slides/Slide16RoadmapQ3';
import { Slide17RoadmapQ4 } from './slides/Slide17RoadmapQ4';
import { Slide18Closing } from './slides/Slide18Closing';

const TOTAL_SLIDES = 18;

export const Presentation = () => {
  const { currentSlide, showSlide, nextSlide, previousSlide, updateProgress } =
    usePresentationNavigation(TOTAL_SLIDES);

  // Setup keyboard navigation
  useKeyboardNavigation({
    nextSlide,
    previousSlide,
    showSlide,
    totalSlides: TOTAL_SLIDES,
  });

  // Setup touch navigation
  useTouchNavigation({
    nextSlide,
    previousSlide,
  });

  // Setup mouse wheel navigation
  useMouseWheelNavigation({
    nextSlide,
    previousSlide,
  });

  const progress = updateProgress();

  const slides = [
    <Slide1Title key="slide-1" isActive={currentSlide === 1} onNextSlide={nextSlide} />,
    <Slide2Team key="slide-2" isActive={currentSlide === 2} onNextSlide={nextSlide} />,
    <Slide3Background key="slide-3" isActive={currentSlide === 3} onNextSlide={nextSlide} />,
    <Slide4Problems key="slide-4" isActive={currentSlide === 4} onNextSlide={nextSlide} />,
    <Slide5Solution key="slide-5" isActive={currentSlide === 5} onNextSlide={nextSlide} />,
    <Slide6Modes key="slide-6" isActive={currentSlide === 6} onNextSlide={nextSlide} />,
    <Slide7AIEvaluator key="slide-7" isActive={currentSlide === 7} onNextSlide={nextSlide} />,
    <Slide8Gamification key="slide-8" isActive={currentSlide === 8} onNextSlide={nextSlide} />,
    <Slide9Advantages1 key="slide-9" isActive={currentSlide === 9} onNextSlide={nextSlide} />,
    <Slide10Advantages2 key="slide-10" isActive={currentSlide === 10} onNextSlide={nextSlide} />,
    <Slide11Demo key="slide-11" isActive={currentSlide === 11} onNextSlide={nextSlide} />,
    <Slide12Impact key="slide-12" isActive={currentSlide === 12} onNextSlide={nextSlide} />,
    <Slide13LongTermImpact key="slide-13" isActive={currentSlide === 13} onNextSlide={nextSlide} />,
    <Slide14RoadmapQ1 key="slide-14" isActive={currentSlide === 14} onNextSlide={nextSlide} />,
    <Slide15RoadmapQ2 key="slide-15" isActive={currentSlide === 15} onNextSlide={nextSlide} />,
    <Slide16RoadmapQ3 key="slide-16" isActive={currentSlide === 16} onNextSlide={nextSlide} />,
    <Slide17RoadmapQ4 key="slide-17" isActive={currentSlide === 17} onNextSlide={nextSlide} />,
    <Slide18Closing key="slide-18" isActive={currentSlide === 18} onNextSlide={nextSlide} />,
  ];

  return (
    <div className="presentation">
      {/* Melayu Theme Background Layers */}
      <div className="melayu-background"></div>
      <div className="grid-pattern"></div>

      <ProgressBar progress={progress} />
      {slides}
      <img
        src={logoBudaya}
        alt="Budaya Indonesia Logo"
        className="budaya-logo"
      />
      {/* Competition Info */}
      <div className="competition-info">
        <p>Kompetisi Inovasi Budaya</p>
        <p>2025</p>
      </div>
      {/* Bottom Corner Guides */}
      <div className="corner-guides"></div>
      <Navigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onNextSlide={nextSlide}
        onPreviousSlide={previousSlide}
        onShowSlide={showSlide}
      />
      {/* Keyboard Navigation UI */}
      <div className="keyboard-ui">
        <div className="keyboard-row">
          <div className="keyboard-key">↑</div>
        </div>
        <div className="keyboard-row">
          <div className="keyboard-key">←</div>
          <div className="keyboard-key">↓</div>
          <div className="keyboard-key">→</div>
        </div>
      </div>
    </div>
  );
};
