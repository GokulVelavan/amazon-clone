import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="chechout_left">
        <img
          className="checkout_img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vivo/march/x60/intrigue/GW/D21592002_WL_VIVO_X60Series_NewLaunch_Tall_hero_1500x600._CB658056007_.jpg"
        />
        {basket?.length === 0 ? (
          <div className="checkout_title">
            <h1>Your Basket is Empty</h1>
            <p>Right Now,You didnt ADD any broduct in yor Basket</p>
          </div>
        ) : (
          <div className="checkout_title">
            <h2>Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                img={item.img}
                pricing={item.pricing}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
