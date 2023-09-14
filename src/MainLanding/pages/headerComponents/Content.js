import React, { useEffect } from "react";

import like from "../../image/icone/like.png";
import shop from "../../image/icone/shop.png";
import stat from "../../image/icone/statistic.png";
import serch from "../../image/icone/search.png";
import log from "../../image/icone/dominoes.png";
import menu from "../../image/icone/menu.png";
import "./style/content.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CustomContext } from "../../../utils/Context";

function Content({ handleClick }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { search, setSearch } = useContext(CustomContext);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  };

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      setProducts([]);
      return;
    }

    const filteredProducts = data.filter((product) =>
      product.name.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setProducts(filteredProducts);
  };
  const oppenSerchProduct = (catigory, name) => {
    navigate(`/${catigory}/${name}`);
    setSearchTerm("");
    setProducts([]);
  };

  function fetchProduct() {
    if (products.length > 0) {
      localStorage.removeItem("search");
      setSearch(products);
      navigate("/search");
      localStorage.setItem("search", JSON.stringify(products));
    } else return;
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      fetchProduct();
    }
  }

  return (
    <section className="header-content-undrilne">
      <div className="header__content container">
        <div
          className="header__logo"
          onClick={() => {
            navigate("/");
          }}
        >
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
          <input
            placeholder="Поиск по товарам"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button type="submit" onClick={fetchProduct}>
            <img src={serch} alt="sd" />
          </button>

          {products.length > 0 && (
            <div className="header__search-products">
              {products.map((item) => (
                <div
                  className="search-product"
                  key={item.id}
                  onClick={() => {
                    oppenSerchProduct(item.catigory, item.name);
                  }}
                >
                  <img
                    className="search-product__img"
                    src={item.img}
                    alt="404"
                  />
                  <div>{item.name}</div>
                </div>
              ))}
            </div>
          )}
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
