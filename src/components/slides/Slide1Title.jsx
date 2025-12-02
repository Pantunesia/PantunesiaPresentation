import { memo } from 'react';
import { Slide } from '../Slide';
import logo from '../../assets/logo-1.png';

export const Slide1Title = memo(({ isActive, onNextSlide }) => {
  return (
    <Slide id={1} isActive={isActive} onNextSlide={onNextSlide}>
      <div className="slide-content title-slide">
        <div className="logo-placeholder">
          <img src={logo} alt="Pantunesia Logo" style={{ maxWidth: '400px', height: 'auto' }} />
        </div>
        <p className="subtitle">
          Inovasi Pembelajaran Pantun Berbasis<br />
          Kecerdasan Buatan (AI) dan Gamifikasi
        </p>
        <div className="title-decoration">
          <div className="decoration-line"></div>
          <i className="fas fa-star"></i>
          <div className="decoration-line"></div>
        </div>
        <p className="tagline">Melestarikan Budaya, Merangkul Teknologi</p>
      </div>
    </Slide>
  );
});

Slide1Title.displayName = 'Slide1Title';
