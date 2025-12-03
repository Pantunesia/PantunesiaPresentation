import { usePresentationNavigation } from '../hooks/usePresentationNavigation';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';
import { useTouchNavigation } from '../hooks/useTouchNavigation';
import { useMouseWheelNavigation } from '../hooks/useMouseWheelNavigation';
import { useMouseActivityDetector } from '../hooks/useMouseActivityDetector';

import { ProgressBar } from './ProgressBar';
import { Navigation } from './Navigation';
import logoBudaya from '../assets/logo-budaya.png';
import logo1 from '../assets/logo-2.png';

import { Slide1Title } from './slides/Slide1Title';
import { SlideDivider } from './slides/SlideDivider';
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

const TOTAL_SLIDES = 25;

export const Presentation = () => {
  const { currentSlide, showSlide, nextSlide, previousSlide, updateProgress } =
    usePresentationNavigation(TOTAL_SLIDES);

  // Detect mouse activity for UI fade
  const isMouseActive = useMouseActivityDetector(3000);

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
    <SlideDivider key="divider-1" isActive={currentSlide === 2} onNextSlide={nextSlide} pantunLines={["Berkumpul bersama dalam satu niat", "Membangun tim yang solid dan kuat", "Dengan semangat dan dedikasi tinggi", "Kami siap melangkah maju bersama"]} />,
    <Slide2Team key="slide-2" isActive={currentSlide === 3} onNextSlide={nextSlide} />,
    <SlideDivider key="divider-2" isActive={currentSlide === 4} onNextSlide={nextSlide} pantunLines={["Di era zaman yang terus berkembang", "Budaya tradisi mulai tergerus zaman", "Perlu wadah untuk melestarikan warisan", "Agar generasi muda tidak terlupakan"]} />,
    <Slide3Background key="slide-3" isActive={currentSlide === 5} onNextSlide={nextSlide} />,
    <Slide4Problems key="slide-4" isActive={currentSlide === 6} onNextSlide={nextSlide} />,
    <SlideDivider key="divider-3" isActive={currentSlide === 7} onNextSlide={nextSlide} pantunLines={["Menciptakan solusi yang sempurna", "Menggabungkan tradisi dan modern", "Pantun jadi lebih menarik dan interaktif", "Untuk semua kalangan yang mencintai seni"]} />,
    <Slide5Solution key="slide-5" isActive={currentSlide === 8} onNextSlide={nextSlide} />,
    <Slide6Modes key="slide-6" isActive={currentSlide === 9} onNextSlide={nextSlide} />,
    <Slide7AIEvaluator key="slide-7" isActive={currentSlide === 10} onNextSlide={nextSlide} />,
    <Slide8Gamification key="slide-8" isActive={currentSlide === 11} onNextSlide={nextSlide} />,
    <SlideDivider key="divider-8" isActive={currentSlide === 12} onNextSlide={nextSlide} pantunLines={["Keunggulan kami telah terbukti nyata", "Mencakup berbagai aspek dan manfaat", "Dari aspek sosial hingga pendidikan", "Semua bersatu dalam satu platform"]} />,
    <Slide9Advantages1 key="slide-9" isActive={currentSlide === 13} onNextSlide={nextSlide} />,
    <Slide10Advantages2 key="slide-10" isActive={currentSlide === 14} onNextSlide={nextSlide} />,
    <SlideDivider key="divider-10" isActive={currentSlide === 15} onNextSlide={nextSlide} pantunLines={["Demo langsung untuk menunjukkan kualitas", "Melihat sendiri bagaimana cara kerjanya", "Pengalaman yang langsung terasa nyata", "Kepercayaan dibangun dari bukti konkret"]} />,
    <Slide11Demo key="slide-11" isActive={currentSlide === 16} onNextSlide={nextSlide} />,
    <SlideDivider key="divider-11" isActive={currentSlide === 17} onNextSlide={nextSlide} pantunLines={["Dampak sosial yang kami ciptakan", "Memberikan nilai untuk masyarakat luas", "Budaya berkembang dan tetap relevan", "Komunitas saling terhubung dan kuat"]} />,
    <Slide12Impact key="slide-12" isActive={currentSlide === 18} onNextSlide={nextSlide} />,
    <Slide13LongTermImpact key="slide-13" isActive={currentSlide === 19} onNextSlide={nextSlide} />,
    <Slide14RoadmapQ1 key="slide-14" isActive={currentSlide === 20} onNextSlide={nextSlide} />,
    <Slide15RoadmapQ2 key="slide-15" isActive={currentSlide === 21} onNextSlide={nextSlide} />,
    <Slide16RoadmapQ3 key="slide-16" isActive={currentSlide === 22} onNextSlide={nextSlide} />,
    <Slide17RoadmapQ4 key="slide-17" isActive={currentSlide === 23} onNextSlide={nextSlide} />,
    <SlideDivider key="divider-17" isActive={currentSlide === 24} onNextSlide={nextSlide} pantunLines={["Perjalanan ini baru saja dimulai", "Bersama kita ciptakan sejarah baru", "Pantun akan hidup di hati generasi muda", "Terima kasih atas dukungan dan kepercayaan"]} />,
    <Slide18Closing key="slide-18" isActive={currentSlide === 25} onNextSlide={nextSlide} />,
  ];

  return (
    <div className={`presentation ${isMouseActive ? 'mouse-active' : 'mouse-inactive'}`}>
      {/* Melayu Theme Background Layers */}
      <div className="melayu-background"></div>
      <div className="grid-pattern"></div>

      <ProgressBar progress={progress} />
      {slides}



      {/* Top Right Section - Logo, Competition Info, and Logo-2 */}
      <div className="top-right-section">
        <img
          src={logoBudaya}
          alt="Budaya Indonesia Logo"
          className="budaya-logo"
        />
        {/* Competition Info */}
        {/* <div className="competition-info">
          <p>Kompetisi Inovasi Budaya</p>
          <p>2025</p>
        </div> */}
        {/* Top Center Logo */}
        <img
          src={logo1}
          alt="Pantunesia Logo"
          className="top-center-logo"
        />
      </div>
      {/* Bottom Corner Guides */}
      <div className="corner-guides"></div>

      {/* Navigation - Always visible */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        onNextSlide={nextSlide}
        onPreviousSlide={previousSlide}
        onShowSlide={showSlide}
      />

      {/* Keyboard Navigation UI - Always visible */}
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

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; 2025 Pantunesia. All rights reserved.</p>
      </div>
    </div>
  );
};
