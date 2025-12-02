import { memo } from 'react';

export const FeatureItem = memo(({ number, icon, title, description }) => {
  return (
    <div className="feature-item">
      <div className="feature-number">
        {icon ? <i className={`fas fa-${icon}`}></i> : number}
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
});

FeatureItem.displayName = 'FeatureItem';
