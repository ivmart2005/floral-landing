import './Section3.css';

const Section3 = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="section-3">
      <div className="section-3-container">
        <div className="section-3-h1-container">
          <div className="title-wrapper">
            <h1>Решение есть:</h1>
            <img src={`${base}images/interface/underline.svg`} alt="" className="underline-img" />
          </div>
        </div>
        
        <div className="section-3-main-info-container">
          <div className="logo-and-text-container">
            <div className="content-container">
              <div className="logo-wrapper">
                <img src={`${base}images/interface/logo-green.svg`} alt="Logo" className="content-logo" />
              </div>
              <div className="text-container">
                Создавайте визуальные прототипы букетов, используя обширный каталог цветов. Показывайте готовые варианты клиентам, меняйте оттенки и компоненты за секунды и утверждайте дизайн до начала сборки.
              </div>
            </div>
          </div>
          <div className="picture-container">
            picture-container
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;