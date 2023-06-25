import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setItems(res.data.meals))
      .catch((e) => console.log(e));
  });

  const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={idMeal} className="card">
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemList}</div>;
};

export default Main;
