import { useState } from 'react';
import './Section4.css';

const Section4 = () => {
  const [currentBlock, setCurrentBlock] = useState(0);

  const blocks = [
    {
      title: "Большой каталог с разными цветами",
      text: [
        "Огромная база цветов позволит вам собрать любой букет, который хочется.",
        "Меняйте ракурсы цветов в один клик, чтобы каждому цветку нашлось место в букете"
      ],
    },
    {
      title: "Система фильтрации",
      text: [
        "Ищите нужный цветок с помощью удобных фильтров, используйте круг Иттена, чтобы найти нужный цвет цветка.",
        "А с помощью фильтрации по типу вы сможете найти все цветы в каталоге нужного вам вида"
      ],
    },
    {
      title: "Удобная настройка цветка",
      text: ["Меняйте разные параметры цветка: от его размера до насыщенности"],
    },
    {
      title: "Файловая система",
      text: ["Создавайте новые холсты и храните все созданные букеты в одном месте"],
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
        
        <div className="carousel-wrapper">
          <img 
            src="/images/interface/transparent-flower-green.svg"
            alt="" 
            className="bg-flower-corner" 
          />

          <div className="section-4-carousel-container">
            <button className="carousel-arrow carousel-arrow-left" onClick={prevBlock} aria-label="Предыдущий блок" />
            
            <div className="section-4-block-container" key={currentBlock}>
              <div className="picture-container"></div>
              <div className="info-container">
                <div className="info-container-header">
                  {blocks[currentBlock].title}
                </div>
                <div className="info-container-text">
                  {blocks[currentBlock].text.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
            
            <button className="carousel-arrow carousel-arrow-right" onClick={nextBlock} aria-label="Следующий блок" />
          </div>
        </div>

        <div className="carousel-indicators">
          {blocks.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentBlock ? 'active' : ''}`}
              onClick={() => goToBlock(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;