import './Section5.css';

const Section5 = () => {
  const base = import.meta.env.BASE_URL;

  const scrollToClass = (className: string) => {
    const element = document.querySelector(`.${className}`);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="section-5">
      <div className="section-5-content-container">
        
        <div className="footer-block logo-block">
          <img src={`${base}images/interface/logo3.svg`} alt="logo" className="footer-logo" />
        </div>

        <div className="footer-block navigation-block">
          <div className="nav-links">
            <button onClick={() => scrollToClass('section-3')}>Решение</button>
            <button onClick={() => scrollToClass('section-4')}>О редакторе</button>
            <button onClick={() => scrollToClass('section-6')}>Для кого</button>
          </div>
          <div className="social-container">
            <a href="https://vk.com" target="_blank" rel="noreferrer">
              <img src={`${base}images/interface/vk-icon.svg`} alt="vk" />
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer">
              <img src={`${base}images/interface/tg-icon.svg`} alt="tg" />
            </a>
          </div>
        </div>

        <div className="footer-block action-block">
          <button className="back-to-top-btn" onClick={scrollToTop}>
            Вернуться наверх
            <img src={`${base}images/interface/arrow-up.svg`} alt="" className="btn-icon" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Section5;