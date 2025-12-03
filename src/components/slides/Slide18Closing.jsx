import { memo } from 'react';
import { Slide } from '../Slide';

export const Slide18Closing = memo(({ isActive, onNextSlide }) => {
  return (
    <Slide id={18} isActive={isActive} onNextSlide={onNextSlide}>
      <div className="slide-content closing-slide">
        <div className="closing-content">
          <p className="closing-text">
            Pantun bukan sekadar warisan, tapi jembatan<br />
            antara generasi masa lalu dan masa depan.<br />
            <br />
            Mari bersama membuktikan bahwa teknologi<br />
            dapat menghidupkan kembali jiwa budaya kita.<br />
            <br />
            <strong>Pantunesia adalah bukti bahwa inovasi<br />
              lahir dari cinta kepada tradisi.</strong>
          </p>
          <h2 className="closing-title">Terima Kasih</h2>
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope"></i> admin@pantunesia.id
            </p>
            <p>
              <i className="fas fa-globe"></i> www.pantunesia.id
            </p>
            <p>
              <i className="fab fa-instagram"></i> pantunesiaid
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
});

Slide18Closing.displayName = 'Slide18Closing';;
