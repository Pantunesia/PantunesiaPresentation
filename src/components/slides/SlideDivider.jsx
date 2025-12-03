import { memo, useEffect } from 'react';
import '../../styles/divider.css';

export const SlideDivider = memo(({ isActive, pantunLines = [], onNextSlide }) => {
  useEffect(() => {
    const budayaLogo = document.querySelector('.budaya-logo');
    const logo2 = document.querySelector('.top-center-logo');

    if (isActive) {
      if (budayaLogo) budayaLogo.style.display = 'none';
      if (logo2) logo2.style.display = 'none';
    } else {
      if (budayaLogo) budayaLogo.style.display = '';
      if (logo2) logo2.style.display = '';
    }
  }, [isActive]);

  const handleSlideClick = () => {
    if (isActive && onNextSlide) {
      onNextSlide();
    }
  };

  return (
    <section
      className={`slide divider-slide ${isActive ? 'active' : ''}`}
      onClick={handleSlideClick}
      style={{
        background: 'var(--primary-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        cursor: 'pointer',
      }}
    >
      {pantunLines && pantunLines.length > 0 && (
        <div className="divider-pantun-content" style={{
          textAlign: 'center',
          color: 'white',
          padding: '60px 40px',
          maxWidth: '900px',
        }}>
          {pantunLines.map((line, index) => (
            <p
              key={index}
              className="divider-pantun-line"
              data-line-index={index}
              style={{
                fontSize: '32px',
                lineHeight: '2',
                margin: '15px 0',
                fontWeight: '500',
                opacity: isActive ? 1 : 0,
                animation: isActive ? `slideInUp 0.8s ease-out ${index * 0.2}s both` : 'none',
              }}
            >
              {line}
            </p>
          ))}
        </div>
      )}
    </section>
  );
});

SlideDivider.displayName = 'SlideDivider';
