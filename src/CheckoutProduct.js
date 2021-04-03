import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, img, pricing, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removefrombasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout_product">
      <img className="checkoutproduct_img" src={img} />
      <div className="ckeckout_product_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
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
        <button onClick={removefrombasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
