import React from "react";
import { useEffect, useState } from "react";
import MealList from "./components/MealList";
import axios from "axios";
import "./Favourites.css";

function Favourites() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/allFavourites/").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <>
      <h2 className="favourites-title">Favourites</h2>
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

export default Favourites;
