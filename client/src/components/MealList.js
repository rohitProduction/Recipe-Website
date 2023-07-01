import React from "react";
import { Link } from "react-router-dom";
import "./MealList.css";

function MealList({ data }) {
  console.log(data);
  return (
    <div className="content-meal-list">
      <ul>
        {data ? (
          data.map((item, index) => {
            return (
              <li key={item.idMeal}>
                <Link className="link" to={`/meal/${item.idMeal}`}>
                  <img
                    className="image"
                    src={item.strMealThumb}
                    alt={item.strMeal}
                  />
                  <h2 className="meal">{item.strMeal}</h2>
                </Link>
              </li>
            );
          })
        ) : (
          <div className="loading">Loading...</div>
        )}
      </ul>
    </div>
  );
}

export default MealList;
