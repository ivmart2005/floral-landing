import './Section6.css';

const Section6 = () => {
  const boxes = [
    {
      speciality: "Флористам",
      info: "Найти новый источник вдохновения для быстрого создания и планирования будущего букета"
    },
    {
      speciality: "Новичкам",
      info: "Дополнить классическое обучение цифровой практикой без траты материалов и побороть страх перед первым букетом"
    },
    {
      speciality: "Преподавателям",
      info: "Помочь ученикам практиковаться не только на курсах, но и дома"
    },
    {
      speciality: "Любителям",
      info: "Расслабиться и приятно провести время, попробовать собрать букет и отправить его близким"
    }
  ];

  return (
    <section className="section-6">
      <div className="section-6-container">
        <div className="section-6-header-h1">
          <h1>BUTON поможет</h1>
        </div>
        
        <div className="section-6-horizontal-grid">
          {boxes.map((box, index) => (
            <div className="box" key={index}>
              <div className="logo-container"></div>
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