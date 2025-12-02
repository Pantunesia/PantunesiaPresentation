import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import { ProblemCard } from '../common/ProblemCard';

export const Slide4Problems = memo(({ isActive, onNextSlide }) => {
  const problems = [
    {
      icon: 'landmark',
      title: 'Warisan Budaya UNESCO',
      description: 'Pantun adalah Warisan Budaya Tak Benda (WBTB) UNESCO yang penting untuk dilestarikan',
    },
    {
      icon: 'money-bill-wave',
      title: 'Menjadi Eksklusif',
      description: 'Pantun berubah menjadi komoditi eksklusif dan komersil, sulit diakses masyarakat luas',
    },
    {
      icon: 'users',
      title: 'Generasi Muda Kesulitan',
      description: 'Generasi muda sulit mempelajari pantun dengan metode konvensional',
    },
    {
      icon: 'rocket',
      title: 'Gap Budaya & Teknologi',
      description: 'Kesenjangan lebar antara budaya tradisional dan teknologi modern',
    },
  ];

  return (
    <Slide id={4} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>Masalah yang Dihadapi</SlideTitle>
          <div className="problem-grid">
            {problems.map((problem, index) => (
              <ProblemCard
                key={index}
                icon={problem.icon}
                title={problem.title}
                description={problem.description}
                data-animate-item
                style={{
                  opacity: index < visibleItems ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: index < visibleItems ? 'auto' : 'none',
                }}
              />
            ))}
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide4Problems.displayName = 'Slide4Problems';;
