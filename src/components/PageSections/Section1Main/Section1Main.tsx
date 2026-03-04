import './Section1Main.css';

const Section1Main = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="section-1-main">
      <div className="background-flower-wrapper">
        <picture>
          <source 
            media="(max-width: 768px)" 
            srcSet={`${base}images/interface/transparent-flower-mobile.svg`} 
          />
          <img
            src={`${base}images/interface/transparent-flower.svg`}
            className="bg-flower-img"
            alt=""
          />
        </picture>
      </div>

      <div className="section-1-container">
        <div className="text-container">
          <h1>Визуализируйте идеи до того, как возьмете в руки первый цветок</h1>
          <h2>Создавайте, экспериментируйте и показывайте клиентам идеальные
          букеты в цифровом виде. Экономьте время и материалы, повышайте конверсию заказов.</h2>
        </div>
        
        <div className="download-and-demo-container">
          <button 
            className="white-button-green-text"
          >
            Скачать на Windows
            <img src={`${base}images/interface/download-icon.svg`} className="btn-icon" alt="" />
          </button>
          <button 
            className="white-button-green-text"
            onClick={() => window.open('https://ivmart2005.github.io/buton-demo/', '_blank')}
          >
            Собрать первый букет онлайн
            <img src={`${base}images/interface/round-arrow.svg`} className="btn-icon" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section1Main;