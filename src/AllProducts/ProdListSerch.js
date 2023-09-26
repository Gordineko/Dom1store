import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../MainLanding/pages/Header";
import "./products.css";
import Renge from "./components/Reng";
import stat from "../MainLanding/image/icone/statistic.png";
import like from "../MainLanding/image/icone/like.png";
import Footer from "../MainLanding/pages/Footer";
import ProductItem from "./components/ProductItem";
import Loader from "../MainLanding/Loader";
import { useContext } from "react";
import { CustomContext } from "../utils/Context";
// import Footer from "../MainLanding/pages/Footer";

function ProdListSerch() {
  const { search } = useContext(CustomContext);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const [values, setValues] = useState([500, 150000]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const parsedSearch = JSON.parse(localStorage.getItem("search"));
    setSearchResults(parsedSearch);
  }, [search]);

  useEffect(() => {
    const filteredByValues = searchResults.filter((item) => {
      const parsCost = parseFloat(item.cost.replace(/[ ,]/g, ""));
      const cost = Number(parsCost);
      return cost >= values[0] && cost <= values[1];
    });

    setFilteredProducts(filteredByValues);
  }, [values, searchResults]);

  return (
    <>
      <div className="products-list">
        <Header />
        <div className="container products_pad">
          <div className="products__sort">
            <h1></h1>
            <Renge values={values} setValues={setValues} />
            <p> Цвет родукта</p>
            <div className="products__memory">
              <p>Встроенная память</p>
              <div className="products__memory_btn_group">
                <button className="products__memory_btn">128 гб</button>
                <button className="products__memory_btn">256 гб</button>
                <button className="products__memory_btn">1 тб</button>
              </div>
            </div>
          </div>
          <div className="products__catalog">
            <div className="products__sorting">
              <h1></h1>
              <button className="products__sorting-btn">Отсортировать</button>
            </div>
            <ul className="products">
              {filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProdListSerch;
