import { memo } from 'react';

export const ProblemCard = memo(({ icon, title, description, ...props }) => {
  return (
    <div className="problem-card" {...props}>
      <div className="problem-icon">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
});

ProblemCard.displayName = 'ProblemCard';
