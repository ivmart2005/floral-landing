import "./Section6.scss";

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
      <div className="section-6__container">
        <div className="section-6__header-wrapper">
          <img
            className="section-6__main-logo"
            src={`${base}images/interface/logo2.svg`}
            alt="logo"
          />
          <div className="section-6__title-container">
            <h1 className="section-6__title">удобный инструмент для</h1>
          </div>
        </div>
        <div className="section-6__horizontal-grid">
          {boxes.map((box, index) => (
            <div className="box section-6__horizontal-grid-box" key={index}>
              <div className="box__logo-container">
                <img
                  className="box__image"
                  src={`${base}images/interface/${box.icon}`}
                  alt={box.speciality} />
              </div>
              <div className="box__speciality">{box.speciality}</div>
              <div className="box__info">{box.info}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;