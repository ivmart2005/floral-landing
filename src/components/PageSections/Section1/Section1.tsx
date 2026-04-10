
import "./Section1.scss";
import { metrikaClick } from "../../../utils/metrika";

const Section1 = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="section-1">
      <div className="section-1__background">
        <picture className="section-1__picture">
          <source
            media="(max-width: 768px)"
            srcSet={`${base}images/interface/transparent-flower-mobile.svg`}
          />
          <img
            className="section-1__background-image"
            src={`${base}images/interface/transparent-flower.svg`}
            alt=""
          />
        </picture>
      </div>

      <div className="section-1__container">
        <div className="section-1__container-text">
          <h1 className="section-1__text-1">Визуализируйте идеи до того, как возьмете в руки первый цветок</h1>
          <h2 className="section-1__text-2">Создавайте, экспериментируйте и показывайте клиентам идеальные
          букеты в цифровом виде. Экономьте время и материалы, повышайте конверсию заказов.</h2>
        </div>

        <div className="section-1__buttons-container">
          <button
            className="section-1__button"
            onClick={() => metrikaClick("main_download_win")}
          >
            <span className="section-1__button-text">Скачать на Windows</span>
            <img
              className="section-1__button-icon"
              src={`${base}images/interface/download-icon.svg`}
              alt="Скачать на Windows"
            />
          </button>
          <button
            className="section-1__button"
            onClick={() => {
              metrikaClick("main_try_demo");
              window.open("https://ivmart2005.github.io/buton-demo/", "_blank")}}
          >
            <span className="section-1__button-text">Собрать первый букет онлайн</span>
            <img
              className="section-1__button-icon"
              src={`${base}images/interface/round-arrow.svg`}
              alt="Собрать букет в демо-версии"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1;