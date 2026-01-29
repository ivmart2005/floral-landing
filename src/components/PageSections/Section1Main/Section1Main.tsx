import './Section1Main.css';

const Section1Main = () => {
  return (
    <section className="section-1-main">
      <div className="section-1-container">
        <div className="text-container">
          <div className="h1-container">
            <h1>Визуализируйте идеи до того, как возьмете в руки первый цветок</h1>
          </div>
          <div className="h2-container">
            <h2>Создавайте, экспериментируйте и показывайте клиентам идеальные букеты в цифровом виде. Экономьте время и материалы, повышайте конверсию заказов.</h2>
          </div>
        </div>
        <div className="download-and-demo-container">
          <button className="green-button">Скачать на Windows</button>
          <button className="outline-button">Собрать первый букет онлайн</button>
        </div>
      </div>
    </section>
  );
};

export default Section1Main;