import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealList from "./components/MealList";
import axios from "axios";

function Search() {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/search/" + name).then((res) => {
      setData(res.data.meals);
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
