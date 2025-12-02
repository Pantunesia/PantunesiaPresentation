import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';
import { ImpactItem } from '../common/ImpactItem';

export const Slide12Impact = memo(({ isActive, onNextSlide }) => {
  const impacts = [
    {
      icon: 'sync-alt',
      description: 'Menghidupkan kembali tradisi pantun melalui teknologi',
    },
    {
      icon: 'door-open',
      description: 'Membuat pantun inklusif, mudah diakses siapa saja',
    },
    {
      icon: 'graduation-cap',
      description: 'Pendidikan budaya modern yang disukai anak muda',
    },
    {
      icon: 'user-friends',
      description: 'Membantu regenerasi penutur pantun',
    },
    {
      icon: 'calendar-alt',
      description: 'Media kreatif untuk festival, sekolah, dan event daerah',
    },
    {
      icon: 'lightbulb',
      description: 'Menginspirasi inovasi yang menghargai warisan budaya lokal',
    },
  ];

  return (
    <Slide id={12} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>Dampak & Relevansi Budaya</SlideTitle>
          {/* <h3 className="subsection-title">Dampak Budaya</h3> */}
          <div className="impact-grid">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="impact-item"
                data-animate-item
                style={{
                  opacity: index < visibleItems ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: index < visibleItems ? 'auto' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  background: 'var(--white)',
                  padding: '30px',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow)',
                }}
              >
                <i className={`fas fa-${impact.icon}`}></i>
                <p style={{ color: 'var(--text-dark)', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide12Impact.displayName = 'Slide12Impact';;
