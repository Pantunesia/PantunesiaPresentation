import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import { AdvantageItem } from '../common/AdvantageItem';

export const Slide9Advantages1 = memo(({ isActive, onNextSlide }) => {
  const advantages = [
    {
      icon: 'users-cog',
      title: 'Inklusif untuk Semua',
      description: 'Bisa dipakai semua orang tanpa batasan',
    },
    {
      icon: 'mobile-alt',
      title: 'Mudah Diakses',
      description: 'Hanya butuh handphone, tidak butuh alat khusus yang mahal',
    },
    {
      icon: 'brain',
      title: 'Teknologi AI Terbukti',
      description: 'Memadukan teknologi AI yang solutif dan efektif',
    },
  ];

  return (
    <Slide id={9} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
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
              <p>Transformasi digital budaya untuk generasi muda nusantara!</p>
            </div>
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide9Advantages1.displayName = 'Slide9Advantages1';;
