import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style/swiperActual.css";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import stat from "../../image/icone/statistic.png";
import like from "../../image/icone/like.png";
import ProductItem from "../../../AllProducts/components/ProductItem";

export default function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [findProduct, setFindProduct] = useState();
  const [slidesPerView, setSlidesPerView] = useState(4);

  const updateSlidesPerView = () => {
    if (window.innerWidth < 600) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 926) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1250) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  };

  window.addEventListener("resize", updateSlidesPerView);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  };

  useEffect(() => {
    setFilteredProducts(data.filter((item) => item.type === "actual"));
  }, [data]);

  function fetchProduct(target) {
    const product = data.find((item) => item.name === target);
    if (product) {
      navigate(`/${product.catigory}/${product.name}`);
    }
  }

  return (
    <section className="swiper">
      <div className="swiper__title">
        <h2>Актуальные предложения</h2>
      </div>
      <Swiper
        navigation={true}
        slidesPerView={slidesPerView}
        spaceBetween={50}
        modules={[Navigation]}
        className="mySwiper"
      >
        {filteredProducts.map((item) => (
          <SwiperSlide
            id="slide"
            key={item.id}
            onClick={() => {
              fetchProduct(item.name);
            }}
          >
            <ProductItem product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
