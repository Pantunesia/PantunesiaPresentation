import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import { RoadmapItem } from '../common/RoadmapItem';

export const Slide15RoadmapQ2 = memo(({ isActive, onNextSlide }) => {
  const items = [
    { icon: 'user-friends', description: 'Fitur duel pantun realtime' },
    { icon: 'chalkboard-teacher', description: 'Fitur kelas pantun' },
    { icon: 'gamepad', description: '2 Mode baru: Pantun tematik & Pantun kilat' },
    { icon: 'user-cog', description: 'Personalisasi Profil' },
  ];

  return (
    <Slide id={15} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>Rencana Pengembangan</SlideTitle>
          <div className="roadmap-quarter">
            <div className="quarter-header">
              <h3>Bulan 3 - 6</h3>
              <span className="quarter-label">Q2</span>
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

Slide15RoadmapQ2.displayName = 'Slide15RoadmapQ2';;
