import React from "react";
import like from "../../image/icone/like.png";
import shop from "../../image/icone/shop.png";
import stat from "../../image/icone/statistic.png";
import search from "../../image/icone/search.png";
import log from "../../image/icone/dominoes.png";
import menu from "../../image/icone/menu.png";
import "./style/content.css";
function Content({ handleClick }) {
  return (
    <section className="header-content-undrilne">
      <div className="header__content container">
        <div className="header__logo">
          <img
            className="header__logo__burger-menu"
            onClick={handleClick}
            src={menu}
            alt="sd"
          />
          <span className="logo">DOM1STORE</span>
        </div>
        <div className="header__contact">
          <p>Бесплатно по УК</p>
          <p className="txt_bolt">+38 (067) 432-43 </p>
        </div>
        <div className="header__hours">
          <p>2018danil@gmail.com</p>
          <p className="txt_bolt">9:00 - 21:00</p>
        </div>
        <div className="header__search">
          <input placeholder="Поиск по товарам" />
          <button>
            <img src={search} alt="sd" />
          </button>
        </div>
        <div className="header__work">
          <button className="header__work__btn-stat">
            <img src={stat} alt="404" />
          </button>
          <button className="header__work__btn-shop">
            <img src={shop} alt="404" />
          </button>{" "}
          <button className="header__work__btn-like">
            <img src={like} alt="404" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Content;
