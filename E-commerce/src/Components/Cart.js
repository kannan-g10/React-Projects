import { useState } from "react";
import Card from "./Card";
const Cart = () => {
  return (
    <div>
      <section className="card">
        <img src={img} alt={title} className="card-image" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>
              {newPrice}
            </div>
            <div className="buy">
              <button style={{ backgroundColor: color }} onClick={colorChange}>
                Buy
              </button>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Cart;
