import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealList from "./components/MealList";

function Search() {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/search/" + name)
      .then((res) => res.json())
      .then((data) => {
        setData(data.meals);
      });
  }, [name]);
  return (
    <div className="content">
      {data ? (
        <MealList data={data}></MealList>
      ) : (
        <div className="loading">Loading...</div>
      )}{" "}
    </div>
  );
}

export default Search;
