import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style/swiperActual.css";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import stat from "../../image/icone/statistic.png";
import like from "../../image/icone/like.png";

export default function App() {
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
          <SwiperSlide id="slide" key={item.id}>
            <div className="swiper__conteiner_img">
              <img src={item.img} alt="sad" />
            </div>
            <div>
              <div className="swiper__titles">
                <span>{item.name}</span>
              </div>
              <p>{item.cost}</p>
              <div className="swider_item_do">
                <button className="product__btn">В корзину</button>
                <img src={stat} alt="404" />
                <img src={like} alt="404" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
