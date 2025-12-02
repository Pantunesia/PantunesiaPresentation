import { memo } from 'react';
import { Slide } from '../Slide';
import { SlideTitle } from '../common/SlideTitle';

export const Slide6Modes = memo(({ isActive, onNextSlide }) => {
  const modes = [
    { icon: 'pencil-alt', title: 'Lengkapi Rima', description: 'Isi kata yang tepat di akhir baris untuk melengkapi rima pantun' },
    { icon: 'spell-check', title: 'Lengkapi Kata', description: 'Cari kata yang hilang di tengah baris pantun agar pantun bermakna' },
    { icon: 'align-left', title: 'Lengkapi Baris', description: 'Tulis baris yang kosong untuk melengkapi pantun' },
    { icon: 'arrow-right', title: 'Lanjutkan Pantun', description: 'Lanjutkan pantun berdasarkan baris yang diberikan' },
    { icon: 'puzzle-piece', title: 'Lengkapi Pantun', description: 'Selesaikan seluruh pantun yang masih belum lengkap' },
    { icon: 'image', title: 'Pantun Gambar', description: 'Buat pantun berdasarkan gambar yang ditampilkan' },
    { icon: 'key', title: 'Pantun Kata-Kunci', description: 'Buat pantun menggunakan kata-kata kunci tertentu' },
    { icon: 'comments', title: 'Jawab Pantun', description: 'Balas pantun dengan pantun yang sesuai' },
  ];

  return (
    <Slide id={6} isActive={isActive} animateItems={true} onNextSlide={onNextSlide}>
      {(visibleItems) => (
        <div className="slide-content">
          <SlideTitle>8 Mode Belajar Kreatif</SlideTitle>
          <div className="modes-grid">
            {modes.map((mode, index) => (
              <div
                key={index}
                className="mode-card"
                data-animate-item
                style={{
                  opacity: index < visibleItems ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: index < visibleItems ? 'auto' : 'none',
                }}
              >
                <div className="mode-icon">
                  <i className={`fas fa-${mode.icon}`}></i>
                </div>
                <h4>{mode.title}</h4>
                <p>{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Slide>
  );
});

Slide6Modes.displayName = 'Slide6Modes';;
