import './Section2Main.css';

const Section2 = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="section-2">
      <div className="centered-container">
        <div className="h1-container">
          <h1>
            Тратите часы на подбор цветов
            <br />
            и объяснения?
          </h1>
        </div>
        <div className="flex-container">
          <div className="box">
            <img 
              src={`${base}images/interface/client-svg.svg`} 
              className="box-icon" 
              alt="" 
            />
            <span className="box-text">Клиент говорит «хочу что-то нежное» – и вы тратите полдня на подбор и эскизы</span>
          </div>
          <div className="box">
            <img 
              src={`${base}images/interface/rubbish-bin.svg`} 
              className="box-icon" 
              alt="" 
            />
            <span className="box-text">Жалко выбрасывать цветы после неудачного эксперимента с композицией</span>
          </div>
          <div className="box">
            <img 
              src={`${base}images/interface/clock.svg`} 
              className="box-icon" 
              alt="" 
            />
            <span className="box-text">На подбор референсов уходит слишком много времени</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;