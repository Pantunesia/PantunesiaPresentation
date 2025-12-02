import { memo } from 'react';

export const RoadmapItem = memo(({ icon, description }) => {
  return (
    <div className="roadmap-item">
      <i className={`fas fa-${icon}`}></i>
      <p>{description}</p>
    </div>
  );
});

RoadmapItem.displayName = 'RoadmapItem';
