import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import { AdvantageItem } from '../common/AdvantageItem';

export const Slide10Advantages2 = memo(({ isActive, onNextSlide }) => {
  const advantages = [
    {
      icon: 'palette',
      title: 'Mendorong Kreativitas',
      description: 'Bukan sekedar konsumsi informasi, tapi menciptakan karya',
    },
    {
      icon: 'laugh-beam',
      title: 'Pelestarian yang Menyenangkan',
      description: 'Gamifikasi membuat pelestarian budaya jadi hal yang fun',
    },
    {
      icon: 'infinity',
      title: 'Pantun: Budaya yang Dinamis',
      description: 'Membuat pengembangan produk menjadi tanpa batas',
    },
  ];

  return (
    <Slide id={10} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>Keunggulan Pantunesia</SlideTitle>
          <div className="advantages-list">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                data-animate-item
                style={{
                  opacity: index < visibleItems ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: index < visibleItems ? 'auto' : 'none',
                }}
              >
                <AdvantageItem
                  icon={advantage.icon}
                  title={advantage.title}
                  description={advantage.description}
                />
              </div>
            ))}
          </div>
          <div
            data-animate-item
            data-animate-type="highlight"
            style={{
              opacity: advantages.length < visibleItems ? 1 : 0,
              pointerEvents: advantages.length < visibleItems ? 'auto' : 'none',
            }}
            className="highlight-box-wrapper"
          >
            <div className="highlight-box">
              <i className="fas fa-star"></i>
              <p>Kombinasi sempurna antara edukasi, teknologi, dan hiburan!</p>
            </div>
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide10Advantages2.displayName = 'Slide10Advantages2';;
