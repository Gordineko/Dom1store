import React from "react";
import list from "../../image/icone/list.png";
import "./style/choice.css";
function Сhoice() {
  return (
    <section className="choice-menu">
      <div className=" container choice">
        <div className="choice__all">
          <img src={list} alt="404" />
          <span>Все товары</span>
        </div>
        <ul className="choice__nav">
          <li>Смартфоны</li>
          <li>Планшеты</li>
          <li>Ноутбуки</li>
          <li>Чехлы</li>
          <li>Наушники</li>
        </ul>
      </div>
    </section>
  );
}

export default Сhoice;
