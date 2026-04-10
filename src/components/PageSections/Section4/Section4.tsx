import { useState } from "react";
import "./Section4.scss";

interface Block {
  title: string;
  text: string[];
}

const Section4 = () => {
  const [currentBlock, setCurrentBlock] = useState<number>(0);
  const blocks: Block[] = [
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
      <div className="section-4__container">
        <header className="section-4__header">
          <h1 className="section-4__title">
            Все, что нужно флористу,<br />в одном редакторе
          </h1>
        </header>

        <div className="section-4__carousel">
          <img
            src="/images/interface/transparent-flower-green.svg"
            className="section-4__carousel-bg-flower"
            alt=""
          />
          <div className="section-4__carousel-main">
            <button
              className="section-4__carousel-arrow section-4__carousel-arrow_left"
              type="button"
              onClick={prevBlock}
              aria-label="Назад"
            />
            <div
              className="section-4__carousel-slide"
              key={currentBlock}
            >
              <div className="section-4__carousel-picture"/>
              <div className="section-4__carousel-content">
                <h2 className="section-4__carousel-title">{blocks[currentBlock].title}</h2>
                <div className="section-4__carousel-text">
                  {blocks[currentBlock].text.map((line, index) => (
                    <p key={index} className="section-4__carousel-paragraph">{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="section-4__carousel-arrow section-4__carousel-arrow_right"
              onClick={nextBlock}
              aria-label="Вперед"
            />
          </div>

          <nav className="section-4__carousel-nav">
            {blocks.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`section-4__carousel-dot ${index === currentBlock ? "section-4__carousel-dot_active" : ""}`}
                onClick={() => goToBlock(index)}
                aria-label={`Слайд ${index + 1}`}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Section4;