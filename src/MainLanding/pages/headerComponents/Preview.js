import React, { useState } from "react";
import location from "../../image/icone/location.png";
import vk from "../../image/company/vk.png";
import tg from "../../image/company/telegram.png";
import yuo from "../../image/company/youtube.png";
import prof from "../../image/icone/profile.png";
import "./style/preview.css";
import Auth from "../../../Authoriz/page/Auth";
import Register from "../../../Authoriz/page/Register";

function Preview({ AuthActive, handleClick, isLogin, LogIn }) {
  const [RegActive, setRegActive] = useState(false);
  function openLoginPage(href) {
    window.location.href = `${href}`;
  }
  function swapRegister() {
    handleClick();
    setRegActive(!RegActive);
  }
  function closeRegister() {
    setRegActive(!RegActive);
  }
  return (
    <section className="header-preview">
      {AuthActive && <div className="overlay"></div>}
      {RegActive && <div className="overlay"></div>}
      <div className="preview">
        <div className="preview__location">
          <img src={location} alt="404" />
          <span>Днепр</span>
        </div>
        <ul className="preview_list">
          <li>Доставка</li>
          <li>Гарантия</li>
          <li>Пункты выдачи на карте</li>
          <li>Адреса магазинов </li>
        </ul>
        <div className="preview__groups">
          <img src={tg} alt="404"></img>
          <img src={vk} alt="404"></img>
          <img src={yuo} alt="404"></img>
        </div>
        {isLogin ? (
          <div
            className="preview__profile"
            onClick={() => openLoginPage("/personal")}
          >
            <img src={prof} alt="404"></img>
            <div className="preview__profile-txt">
              <span>Личный кабинет</span>
              <div className="preview__profile-under_txt">
                <span>вход выполнен</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="preview__profile" onClick={handleClick}>
            <img src={prof} alt="404"></img>
            <span>Личный кабинет</span>
          </div>
        )}
      </div>
      <Auth
        LogIn={LogIn}
        handleClick={handleClick}
        RegActive={swapRegister}
        AuthActive={AuthActive}
        isLogin={isLogin}
      />
      <Register RegActive={RegActive} handleClick={closeRegister} />
    </section>
  );
}

export default Preview;
