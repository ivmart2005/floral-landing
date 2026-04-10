import "./Section3.scss";

const Section3 = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="section-3">
      <div className="section-3__container">
        <div className="section-3__title-container">
          <h1 className="section-3__title-text">Решение есть:</h1>
          <img
            className="section-3__title-img"
            src={`${base}images/interface/underline.svg`}
            alt=""
          />
        </div>

        <div className="section-3__main-container">
          <div className="section-3__logo-and-text-container">
            <div className="section-3__content-container">
              <div className="section-3__logo-container">
                <img
                  className="section-3__logo"
                  src={`${base}images/interface/logo-green.svg`}
                  alt="Логотип"
                />
              </div>
              <div className="section-3__text-container">
                <span className="section-3__text">
                  Создавайте визуальные прототипы букетов, используя обширный каталог цветов. Показывайте готовые варианты клиентам, меняйте оттенки и компоненты за секунды и утверждайте дизайн до начала сборки.
                </span>
              </div>
            </div>
          </div>
          <div className="section-3__picture-container">
            picture-container (пусто)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;