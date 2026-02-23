import './Section6.css';

const Section6 = () => {
  const base = import.meta.env.BASE_URL;

  const boxes = [
    {
      icon: "star.svg",
      speciality: "Флористов",
      info: "Найти новый источник вдохновения для быстрого создания и планирования будущего букета"
    },
    {
      icon: "student.svg",
      speciality: "Новичков",
      info: "Дополнить классическое обучение цифровой практикой без траты материалов и побороть страх перед первым букетом"
    },
    {
      icon: "book.svg",
      speciality: "Преподавателей",
      info: "Помочь ученикам практиковаться не только на курсах, но и дома"
    },
    {
      icon: "heart.svg",
      speciality: "Любителей",
      info: "Расслабиться и приятно провести время, попробовать собрать букет и отправить его близким"
    }
  ];

  return (
    <section className="section-6">
      <div className="section-6-container">
        <div className="section-6-header-wrapper">
          <img src={`${base}images/interface/logo2.svg`} alt="logo" className="section-6-main-logo" />
          <div className="section-6-header-h1">
            <h1>удобный инструмент для</h1>
          </div>
        </div>
        
        <div className="section-6-horizontal-grid">
          {boxes.map((box, index) => (
            <div className="box" key={index}>
              <div className="logo-container">
                <img src={`${base}images/interface/${box.icon}`} alt={box.speciality} />
              </div>
              <div className="speciality-container">{box.speciality}</div>
              <div className="info-container">{box.info}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;