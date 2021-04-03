import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, img, pricing, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addtobasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        pricing: pricing,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="pricing">
          <small>$</small>
          <strong>{pricing}</strong>
        </p>

        <div className="rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>
      </div>

      <img src={img} />
      <button onClick={addtobasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
