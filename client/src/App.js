import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Meal from "./Meal";
import "./App.css";
import Search from "./Search";
import About from "./About";
import Favourites from "./Favourites";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Meal />} />
            <Route path="/search/:name" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
