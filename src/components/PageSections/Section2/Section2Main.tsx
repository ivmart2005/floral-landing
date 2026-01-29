import './Section2Main.css';

const Section2 = () => {
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
            Клиент говорит «хочу что-то нежное» – и вы тратите полдня на подбор и эскизы
          </div>
          <div className="box">
            Жалко выбрасывать цветы после неудачного эксперимента с композицией
          </div>
          <div className="box">
            На подбор референсов уходит слишком много времени
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;