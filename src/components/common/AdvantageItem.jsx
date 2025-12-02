import { memo } from 'react';

export const AdvantageItem = memo(({ icon, title, description }) => {
  return (
    <div className="advantage-item">
      <div className="advantage-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <div className="advantage-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
});

AdvantageItem.displayName = 'AdvantageItem';
