import "./Section5.scss";

const Section5 = () => {
  const base = import.meta.env.BASE_URL;
  const scrollToClass = (className: string) => {
    const element = document.querySelector(`.${className}`);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="section-5">
      <div className="section-5__content-container">
        <div className="section-5__logo-block">
          <img
            className="section-5__logo"
            src={`${base}images/interface/logo3.svg`}
            alt="logo"
          />
        </div>

        <div className="section-5__navigation-block">
          <div className="section-5__buttons">
            <button className="section-5__button" onClick={() => scrollToClass("section-3")}>Решение</button>
            <button className="section-5__button" onClick={() => scrollToClass("section-4")}>О редакторе</button>
            <button className="section-5__button" onClick={() => scrollToClass("section-6")}>Для кого</button>
          </div>
          <div className="section-5__social-container">
            <a className="section-5__social-link" href="https://vk.com" target="_blank" rel="noreferrer">
              <img
                className="section-5__social-icon"
                src={`${base}images/interface/vk-icon.svg`}
                alt="vk"
              />
            </a>
            <a className="section-5__social-link" href="https://t.me" target="_blank" rel="noreferrer">
              <img
                className="section-5__social-icon"
                src={`${base}images/interface/tg-icon.svg`}
                alt="tg"
              />
            </a>
          </div>
        </div>

        <div className="section-5__action-block">
          <button
            className="section-5__back-to-top-btn"
            onClick={scrollToTop}
          >
            <span className="section-5__back-to-top-text">Вернуться наверх</span>
            <img
              className="section-5__back-to-top-icon"
              src={`${base}images/interface/arrow-up.svg`}
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5;