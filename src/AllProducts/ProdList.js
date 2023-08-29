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
// import Footer from "../MainLanding/pages/Footer";

function Prod() {
  const { type } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/product");
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error("error fetch product data", error.message);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    setFilteredProducts(products.filter((item) => item.catigory === type));
  }, [products, type]);

  console.log(filteredProducts);
  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="products-list">
          <Header />
          <div className="container products_pad">
            <div className="products__sort">
              <h1>{type}</h1>
              <Renge />
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
                <h1>{type}</h1>
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
      )}
    </>
  );
}

export default Prod;
