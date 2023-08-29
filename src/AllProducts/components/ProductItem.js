import React from "react";
import stat from "../../MainLanding/image/icone/statistic.png";
import like from "../../MainLanding/image/icone/like.png";

function ProductItem(props) {
  const { product } = props;

  function handleClick(href) {
    console.log("asd");
    window.location.href = `${href}`;
  }

  return (
    <div
      className="prod"
      onClick={() => handleClick(`/${product.catigory}/${product.name}`)}
    >
      <div className="product__conteiner_img">
        <img src={product.img} alt="sad" />
      </div>
      <div className="product__content">
        <div className="product__titles">
          <span>{product.name}</span>
        </div>
        <p>{product.cost + " ₴"}</p>
        <div className="product_item_do">
          <button className="product__btn">В корзину</button>
          <img src={stat} alt="404" />
          <img src={like} alt="404" />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
