import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const scrollToClass = (className: string) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const base = import.meta.env.BASE_URL;

  return (
    <header className="header">
      <div className="header__container">
        <div className="logo-container">
          <img
            src={`${base}images/interface/logo.svg`}
            alt="logo"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <div className="about-container">
          <a onClick={() => scrollToClass('section-3')}>Решение</a>
          <a onClick={() => scrollToClass('section-4')}>О редакторе</a>
          <a onClick={() => scrollToClass('section-6')}>Для кого</a>
        </div>
        
        {!isMobile && (
          <div className="buttons-container">
            <button className="green-button">
              Скачать на Windows
              <img src={`${base}images/interface/download-icon-white.svg`} alt="" className="btn-icon" />
            </button>
            <button className="outline-button">
              Попробовать
              <img src={`${base}images/interface/round-arrow.svg`} alt="" className="btn-icon" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;