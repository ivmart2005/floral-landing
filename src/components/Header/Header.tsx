import "./Header.scss";
import { metrikaClick } from "../../utils/metrika";

const Header = () => {
  const scrollToClass = (className: string) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const base = import.meta.env.BASE_URL;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
          <img
            className="header__logo-img"
            src={`${base}images/interface/logo.svg`}
            alt="Бутон - графический редактор для флористов"
          />
        </div>
        <div className="header__about-container">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <button className="navigation-button" onClick={() => scrollToClass("section-3")}>
                Решение
              </button>
            </li>
            <li className="header__nav-item">
              <button className="navigation-button" onClick={() => scrollToClass("section-4")}>
                О редакторе
              </button>
            </li>
            <li className="header__nav-item">
              <button className="navigation-button" onClick={() => scrollToClass("section-6")}>
                Для кого
              </button>
            </li>
          </ul>
        </div>

        <div className="header__buttons">
          <button
            className="header__buttons_download"
            onClick={() => metrikaClick("header_download_win")}
          >
            <span className="button__text">Скачать на Windows</span>
            <img
              className="button__icon"
              src={`${base}images/interface/download-icon-white.svg`}
              alt=""
            />
          </button>
          <button
            className="header__buttons_demo"
            onClick={() => {metrikaClick("header_try_demo");
            window.open("https://ivmart2005.github.io/buton-demo/", "_blank")}}
          >
            <span className="button__text">Попробовать</span>
            <img
              className="button__icon"
              src={`${base}images/interface/round-arrow.svg`}
              alt=""
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;