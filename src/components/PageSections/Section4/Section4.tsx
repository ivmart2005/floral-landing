import { useState } from 'react';
import './Section4.css';

const Section4 = () => {
  const [currentBlock, setCurrentBlock] = useState(0);

  const blocks = [
    {
      title: "Большой каталог с разными цветами",
      text: "Огромная база цветов позволит вам собрать любой букет, который хочется. Меняйте ракурсы цветов в один клик, чтобы каждому цветку нашлось место в букете",
    },
    {
      title: "Система фильтрации",
      text: "Ищите нужный цветок с помощью удобных фильтров, используйте круг Иттена, чтобы отфильтровать найти нужный цвет цветка. А с помощью фильтрации по типу вы сможете найти все цветы в каталоге нужного вам вида",
    },
    {
      title: "Удобная настройка цветка",
      text: "Меняйте разные параметры цветка: от его размера до насыщенности",
    },
    {
      title: "Файловая система",
      text: "Создавайте новые холсты и храните все созданные букеты в одном месте",
    }
  ];

  const nextBlock = () => setCurrentBlock((prev) => (prev + 1) % blocks.length);
  const prevBlock = () => setCurrentBlock((prev) => (prev - 1 + blocks.length) % blocks.length);
  const goToBlock = (index: number) => setCurrentBlock(index);

  return (
    <section className="section-4">
      <div className="section-4-content-container">
        <div className="section-4-header-container">
          <h1>Все, что нужно флористу,<br />в одном редакторе</h1>
        </div>
        
        <div className="section-4-carousel-container">
          <button className="carousel-arrow carousel-arrow-left" onClick={prevBlock} aria-label="Предыдущий блок" />
          
          <div className="section-4-block-container">
            <div className="picture-container" key={`picture-${currentBlock}`}></div>
            <div className="info-container">
              <div className="info-container-header" key={`title-${currentBlock}`}>
                {blocks[currentBlock].title}
              </div>
              <div className="info-container-text" key={`text-${currentBlock}`}>
                {blocks[currentBlock].text}
              </div>
            </div>
          </div>
          
          <button className="carousel-arrow carousel-arrow-right" onClick={nextBlock} aria-label="Следующий блок" />
        </div>

        <div className="carousel-indicators">
          {blocks.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentBlock ? 'active' : ''}`}
              onClick={() => goToBlock(index)}
              aria-label={`Перейти к блоку ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;