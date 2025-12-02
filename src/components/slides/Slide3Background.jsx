import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';

export const Slide3Background = memo(({ isActive, onNextSlide }) => {
  return (
    <Slide id={3} isActive={isActive} onNextSlide={onNextSlide}>
      <div className="slide-content">
        <SlideTitle>Latar Belakang</SlideTitle>
        <div className="problem-intro">
          <div className="problem-visual">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <p className="lead-text">Pantun menghadapi tantangan di era digital</p>
        </div>
      </div>
    </Slide>
  );
});

Slide3Background.displayName = 'Slide3Background';;
