import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';

export const Slide8Gamification = memo(({ isActive, onNextSlide }) => {
  const features = [
    {
      icon: 'layer-group',
      title: 'Level Progresif',
      description: 'Sistem level yang terus meningkat dengan tantangan yang lebih sulit',
    },
    {
      icon: 'star',
      title: 'Experience Points',
      description: 'Kumpulkan EXP dari setiap aktivitas untuk naik level',
    },
    {
      icon: 'trophy',
      title: 'Sistem Scoring',
      description: 'Dapatkan poin berdasarkan kecepatan, akurasi, dan kreativitas jawaban',
    },
    {
      icon: 'crown',
      title: 'Titel Sastra Nusantara',
      description: 'Raih gelar eksklusif: Pemula Pantun, Master Rima, Guru Sastra, dll',
    },
    {
      icon: 'unlock',
      title: 'Buka Tantangan Baru',
      description: 'Selesaikan level untuk membuka mode, fitur, dan tantangan baru',
    },
    {
      icon: 'drum',
      title: 'Gamifikasi Budaya',
      description: 'Menggunakan budaya nusantara pada soal pantun, musik latar, dan sound effect',
    },
  ];

  return (
    <Slide id={8} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>Gamifikasi</SlideTitle>
          <div className="gamification-features">
            {features.map((feature, index) => (
              <div
                key={index}
                className="gamification-card"
                data-animate-item
                style={{
                  opacity: index < visibleItems ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: index < visibleItems ? 'auto' : 'none',
                }}
              >
                <div className="gamification-icon">
                  <i className={`fas fa-${feature.icon}`}></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide8Gamification.displayName = 'Slide8Gamification';;
