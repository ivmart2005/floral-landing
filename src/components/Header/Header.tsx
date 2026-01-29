import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo-container"></div>
        
        <div className="about-container">
          <a>Решение</a>
          <a>О редакторе</a>
          <a>Для кого</a>
        </div>
        
        <div className="buttons-container">
          <button className="green-button">Скачать на Windows</button>
          <button className="outline-button">Попробовать</button>
        </div>
      </div>
    </header>
  );
};

export default Header;