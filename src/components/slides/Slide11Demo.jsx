import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import mockupHome from '../../assets/mockup-home.jpg';
import mockupSoal from '../../assets/mockup-soal.jpg';
import mockupHasil from '../../assets/mockup-hasil.jpg';
import mockupProgress from '../../assets/mockup-progress.jpg';

export const Slide11Demo = memo(({ isActive, onNextSlide }) => {
  const mockups = [
    { image: mockupHome, title: 'Beranda' },
    { image: mockupSoal, title: 'Mode Soal' },
    { image: mockupHasil, title: 'Hasil Evaluasi' },
    { image: mockupProgress, title: 'Progress' },
  ];

  return (
    <Slide id={11} isActive={isActive} onNextSlide={onNextSlide}>
      <div className="slide-content">
        <SlideTitle>Demo & Visualisasi</SlideTitle>
        <div className="mockups-gallery">
          {mockups.map((mockup, index) => (
            <div key={index} className="mockup-container">
              <div className="mockup-frame">
                <img src={mockup.image} alt={mockup.title} />
              </div>
              <p className="mockup-label">{mockup.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
});

Slide11Demo.displayName = 'Slide11Demo';;
