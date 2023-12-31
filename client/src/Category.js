import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealList from "./components/MealList";
import axios from "axios";

function Category() {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/category/" + name).then((res) => {
      setData(res.data.meals);
    });
  }, []);
  return (
    <>
      <h2 className="category-title">{name}</h2>
      <div className="content-meal-list">
        {data ? (
          <MealList data={data}></MealList>
        ) : (
          <div className="loading">Loading...</div>
        )}{" "}
      </div>
    </>
  );
}

export default Category;
