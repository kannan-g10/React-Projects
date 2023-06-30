import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import Cart from "./Cart";
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [color, setColor] = useState("rgb(18, 217, 18)");

  const colorChange = () => {
    setColor("rgb(142, 96, 37)");
  };

  return (
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
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
