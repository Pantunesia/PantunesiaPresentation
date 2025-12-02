import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import { RoadmapItem } from '../common/RoadmapItem';

export const Slide14RoadmapQ1 = memo(({ isActive, onNextSlide }) => {
  const items = [
    { icon: 'cogs', description: 'Perbaikan AI Evaluator' },
    { icon: 'rocket', description: 'Rilis MVP' },
    { icon: 'dashboard', description: 'Pembuatan admin dashboard' },
    { icon: 'plus-circle', description: 'Penambahan soal pantun' },
  ];

  return (
    <Slide id={14} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>Rencana Pengembangan</SlideTitle>
          <div className="roadmap-quarter">
            <div className="quarter-header">
              <h3 className="quarter-header-title">Bulan 0 - 3</h3>
              <span className="quarter-label">Q1</span>
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

Slide14RoadmapQ1.displayName = 'Slide14RoadmapQ1';;
