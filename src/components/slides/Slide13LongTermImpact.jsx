import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import { TimelineItem } from '../common/TimelineItem';

export const Slide13LongTermImpact = memo(({ isActive, onNextSlide }) => {
  const impacts = [
    {
      icon: 'hashtag',
      description: 'Pantun menjadi bagian dari keseharian digital anak muda',
    },
    {
      icon: 'users',
      description: 'Terbentuknya komunitas pantun nasional',
    },
    {
      icon: 'shield-alt',
      description: 'Konservasi budaya dalam bentuk teknologi',
    },
    {
      icon: 'school',
      description: 'Potensi menjadi standar pembelajaran pantun di sekolah',
    },
    {
      icon: 'flag',
      description: 'Potensi menjadi pusat literasi budaya nasional',
    },
  ];

  return (
    <Slide id={13} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>Dampak Jangka Panjang</SlideTitle>
          <div className="timeline-impacts">
            {impacts.map((impact, index) => (
              <div
                key={index}
                data-animate-item
                style={{
                  opacity: index < visibleItems ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: index < visibleItems ? 'auto' : 'none',
                }}
              >
                <TimelineItem icon={impact.icon} description={impact.description} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide13LongTermImpact.displayName = 'Slide13LongTermImpact';;
