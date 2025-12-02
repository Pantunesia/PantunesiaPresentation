import { memo } from 'react';

export const ImpactItem = memo(({ icon, description }) => {
  return (
    <div className="impact-item">
      <i className={`fas fa-${icon}`}></i>
      <p>{description}</p>
    </div>
  );
});

ImpactItem.displayName = 'ImpactItem';
