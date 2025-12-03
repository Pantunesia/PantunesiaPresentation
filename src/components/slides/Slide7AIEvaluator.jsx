import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';

export const Slide7AIEvaluator = memo(({ isActive, onNextSlide }) => {
  const steps = [
    {
      icon: 'check-circle',
      title: 'Validasi Struktur',
      description: 'Memverifikasi rima dan struktur pantun yang sesuai kaidah',
    },
    {
      icon: 'brain',
      title: 'Analisis Konten',
      description: 'AI menganalisis makna, logika dan hubungan antar baris pantun yang dibuat pengguna',
    },
    {
      icon: 'calculator',
      title: 'Penilaian Skor',
      description: 'Menghitung skor berdasarkan struktur, makna dan logika pantun, capaian waktu, dan relevansi',
    },
    {
      icon: 'book-reader',
      title: 'Feedback Personal',
      description: 'Memberikan saran perbaikan dan penjelasan untuk pembelajaran',
    },
  ];

  return (
    <Slide id={7} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>AI Evaluator: Cara Kerja</SlideTitle>
          <div className="evaluator-steps">
            {steps.map((step, index) => (
              <div
                key={index}
                className="evaluator-step"
                data-animate-item
                style={{
                  opacity: index < visibleItems ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: index < visibleItems ? 'auto' : 'none',
                }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">
                  <i className={`fas fa-${step.icon}`}></i>
                </div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide7AIEvaluator.displayName = 'Slide7AIEvaluator';;
