import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import axios from "axios";

function Categories() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/categories").then((res) => {
      setData(res.data.categories);
    });
  }, []);
  return (
    <>
      <h2 className="category-title">Categories</h2>
      <div className="categories-content">
        <ul>
          {data ? (
            data.map((item, index) => {
              return (
                <li key={item.idCategory}>
                  <Link className="link" to={`category/${item.strCategory}`}>
                    <img
                      className="image"
                      src={item.strCategoryThumb}
                      alt={item.strCategory}
                    />
                    <h2 className="category">{item.strCategory}</h2>
                    <p className="categoryDescription">
                      {item.strCategoryDescription}
                    </p>
                  </Link>
                </li>
              );
            })
          ) : (
            <div className="loading">Loading...</div>
          )}
        </ul>
      </div>
    </>
  );
}

export default Categories;
