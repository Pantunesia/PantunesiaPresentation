import { memo } from 'react';

export const TimelineItem = memo(({ icon, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <p>{description}</p>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
