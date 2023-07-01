import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Meal.css";

function Meal() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  // const [favourite, setFavourite] = useState(null);

  // const handleFavourite = (ingredients, measurements) => {
  //   fetch("/favourite", {
  //     id: data.idMeal,
  //     name: data.strMeal,
  //     area: data.strArea,
  //     category: data.strCategory,
  //     instructions: data.strInstructions,
  //     thumbnail: data.strMealThumb,
  //     ingredients: ingredients,
  //     measurements: measurements,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.meals[0]);
  //       setData(data.meals[0]);
  //     });
  // };

  useEffect(() => {
    fetch("/meal/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals[0]);
        setData(data.meals[0]);
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
            <p className="meal-category">{`Category: ${data.strCategory}`}</p>
            <p className="meal-area">{`Area of Origin: ${data.strArea}`}</p>
            <p className="meal-instructions">{`Instructions: ${data.strInstructions}`}</p>
            {/* <button onClick={handleFavourite}> favourite</button> */}
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
          {/* <p>Measurements</p>
          <ul>
            {Object.keys(data)
              .filter((v) => v.startsWith("strMeasure"))
              .map((item, index) => {
                const measurement = data[item];
                if (measurement) {
                  return (
                    <li key={item}>
                      <p className="measurements">{measurement}</p>
                    </li>
                  );
                }
              })}
          </ul> */}
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default Meal;
