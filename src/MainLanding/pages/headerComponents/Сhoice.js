import React, { useEffect, useState } from "react";
import list from "../../image/icone/list.png";
import list_black from "../../image/icone/menu_black.png";
import "./style/choice.css";
import { useNavigate } from "react-router-dom";
function Сhoice() {
  const [activeButtonIndex, setActiveButtonIndex] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const storedIndex = localStorage.getItem("activeButtonIndex");
    if (storedIndex !== null) {
      setActiveButtonIndex(parseInt(storedIndex));
    }
  }, []);

  const handleButtonClick = (buttonIndex, nav) => {
    setActiveButtonIndex(buttonIndex);
    localStorage.setItem("activeButtonIndex", buttonIndex);
    navigate(nav);
  };
  
  return (
    <section className="choice-menu">
      <div className=" container choice">
        <div
          className={
            activeButtonIndex === 1 ? "choice__all active" : "choice__all"
          }
          onClick={() => {
            handleButtonClick(1, "/");
          }}
        >
          <img src={activeButtonIndex === 1 ? list : list_black} alt="404" />
          <span>Все товары</span>
        </div>
        <ul className="choice__nav">
          <li
            className={
              activeButtonIndex === 2
                ? "choice__nav-item active"
                : "choice__nav-item"
            }
            onClick={() => {
              handleButtonClick(2, "/phones");
            }}
          >
            Смартфоны
          </li>
          <li
            className={
              activeButtonIndex === 3
                ? "choice__nav-item active"
                : "choice__nav-item"
            }
            onClick={() => {
              handleButtonClick(3, "/laptops");
            }}
          >
            Планшеты
          </li>
          <li
            className={
              activeButtonIndex === 4
                ? "choice__nav-item active"
                : "choice__nav-item"
            }
            onClick={() => {
              handleButtonClick(4, "/tablets");
            }}
          >
            Ноутбуки
          </li>
          <li
            className={
              activeButtonIndex === 5
                ? "choice__nav-item active"
                : "choice__nav-item"
            }
            onClick={() => {
              handleButtonClick(5, "/homes");
            }}
          >
            Аксесуары
          </li>
          <li
            className={
              activeButtonIndex === 6
                ? "choice__nav-item active"
                : "choice__nav-item"
            }
            onClick={() => {
              handleButtonClick(6, "/consoles");
            }}
          >
            Консоли
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Сhoice;
