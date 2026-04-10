import "./Section2.scss";

const Section2 = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="section-2">
      <div className="section-2__container">
        <div className="section-2__title-container">
          <h1 className="section-2__title-text">
            Тратите часы на подбор цветов
            <br />
            и объяснения?
          </h1>
        </div>
        <div className="section-2__main-container">
          <div className="section-2__card">
            <img
              className="section-2__card-icon"
              src={`${base}images/interface/client-svg.svg`}
              alt=""
            />
            <span className="section-2__card-text">Клиент говорит «хочу что-то нежное» – и вы тратите полдня на подбор и эскизы</span>
          </div>
          <div className="section-2__card">
            <img
              className="section-2__card-icon"
              src={`${base}images/interface/rubbish-bin.svg`}
              alt=""
            />
            <span className="section-2__card-text">Жалко выбрасывать цветы после неудачного эксперимента с композицией</span>
          </div>
          <div className="section-2__card">
            <img
              className="section-2__card-icon"
              src={`${base}images/interface/clock.svg`}
              alt=""
            />
            <span className="section-2__card-text">На подбор референсов уходит слишком много времени</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;