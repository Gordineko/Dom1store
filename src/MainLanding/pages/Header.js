import React, { useEffect, useState } from "react";
import "../style/header.css";

import Content from "./headerComponents/Content";
import Choice from "./headerComponents/Сhoice";
import Preview from "./headerComponents/Preview";
import Burger from "./headerComponents/Burger";
function Header() {
  const [AuthActive, setAuthActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLogin, setIsLogin] = useState(() => {
    const storedValue = localStorage.getItem("isLogin");
    return storedValue === "true";
  });
  useEffect(() => {
    localStorage.setItem("isLogin", isLogin.toString());
  }, [isLogin]);

  function LogIn() {
    setIsLogin(!isLogin);
  }

  function openAuth() {
    setAuthActive(!AuthActive);
  }
  function openMobileAuth() {
    setAuthActive(!AuthActive);
    setIsActive(!isActive);
  }

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <header>
      <Burger
        isActive={isActive}
        AuthActive={AuthActive}
        isLogin={isLogin}
        handleClick={toggleClass}
        AuthClick={openMobileAuth}
      />
      {isActive && <div className="overlay"></div>}
      <Preview
        LogIn={LogIn}
        handleClick={openAuth}
        AuthActive={AuthActive}
        isLogin={isLogin}
      />
      <Content handleClick={toggleClass} />
      <Choice />
    </header>
  );
}

export default Header;
