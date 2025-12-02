import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import { RoadmapItem } from '../common/RoadmapItem';

export const Slide17RoadmapQ4 = memo(({ isActive, onNextSlide }) => {
  const items = [
    { icon: 'trophy', description: 'Event "Laga Pantun" online' },
    { icon: 'expand-arrows-alt', description: 'Ekspansi materi budaya lain (peribahasa, syair, gurindam)' },
  ];

  return (
    <Slide id={17} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>Rencana Pengembangan</SlideTitle>
          <div className="roadmap-quarter">
            <div className="quarter-header">
              <h3>Bulan 9 - 12</h3>
              <span className="quarter-label">Q4</span>
            </div>
            <div className="roadmap-items">
              {items.map((item, index) => (
                <div
                  key={index}
                  data-animate-item
                  style={{
                    opacity: index < visibleItems ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    pointerEvents: index < visibleItems ? 'auto' : 'none',
                  }}
                >
                  <RoadmapItem icon={item.icon} description={item.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide17RoadmapQ4.displayName = 'Slide17RoadmapQ4';;
