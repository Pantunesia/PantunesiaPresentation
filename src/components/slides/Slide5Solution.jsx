import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import { FeatureItem } from '../common/FeatureItem';
import logo from '../../assets/logo.png';

export const Slide5Solution = memo(({ isActive, onNextSlide }) => {
  const features = [
    {
      number: '8',
      title: 'Mode Belajar Kreatif',
      description: 'Berbagai cara seru untuk eksplorasi pantun',
    },
    {
      icon: 'robot',
      title: 'AI Evaluator',
      description: 'Pengganti peran guru/praktisi yang efektif',
    },
    {
      icon: 'gamepad',
      title: 'Gamifikasi',
      description: 'Belajar jadi menyenangkan dan engaging',
    },
  ];

  return (
    <Slide id={5} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>Solusi & Konsep Produk</SlideTitle>
          <div className="solution-hero">
            <div className="solution-icon">
              <img src={logo} alt="Pantunesia" />
            </div>
            <h3>Pantunesia: Belajar Pantun Jadi Menyenangkan!</h3>
          </div>
          <div className="solution-features">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate-item
                style={{
                  opacity: index < visibleItems ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: index < visibleItems ? 'auto' : 'none',
                }}
              >
                <FeatureItem
                  number={feature.number}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide5Solution.displayName = 'Slide5Solution';;
