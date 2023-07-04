import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Meal.css";
import axios from "axios";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

function Meal() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [favourite, setFavourite] = useState(false);

  const handleFavourite = () => {
    if (!favourite) {
      const meal = {
        idMeal: data.idMeal,
        strMeal: data.strMeal,
        strMealThumb: data.strMealThumb,
      };
      axios
        .post("/favourite", meal)
        .then(() => setFavourite(true))
        .catch((err) => {
          console.error(err);
        });
    } else {
      axios.get("/unfavourite/" + data.idMeal).then(() => setFavourite(false));
    }
  };

  useEffect(() => {
    axios.get("/meal/" + id).then((res) => {
      setData(res.data.meals[0]);
    });
  }, []);

  useEffect(() => {
    axios.get("/favourited/" + id).then((res) => {
      if (res.data.length > 0) {
        setFavourite(true);
      }
    });
  }, []);

  return (
    <div>
      {data ? (
        <div className="meal-content">
          <section>
            <h2 className="meal-mealName">{data.strMeal}</h2>
            <img
              className="meal-image"
              src={data.strMealThumb}
              alt={data.strMeal}
            />
            <div className="favourite-container">
              <p className="meal-category">{`Category: ${data.strCategory}`}</p>
              <button onClick={handleFavourite} className="favorite-button">
                Favourite:
                {favourite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
              </button>
            </div>
            <p className="meal-area">{`Area of Origin: ${data.strArea}`}</p>
            <p className="meal-instructions">{`Instructions: ${data.strInstructions}`}</p>
          </section>
          <p className="ingredient-title">Ingredients</p>
          <ul>
            {Object.keys(data)
              .filter((v) => v.startsWith("strIngredient"))
              .map((item, index) => {
                const ingredient = data[item];
                const measurement = data[`strMeasure${index + 1}`];
                if (ingredient && measurement) {
                  return (
                    <li key={item}>
                      <p className="ingredients">{ingredient}</p>
                      <p className="measurement">{measurement}</p>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default Meal;
