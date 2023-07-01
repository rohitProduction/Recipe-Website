import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Meal from "./Meal";
import "./App.css";
import Search from "./Search";
import About from "./About";

function App() {
  // const [data, setData] = useState([{}])
  // useEffect(() => {
  //   fetch("/members").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //       console.log(data)
  //     }
  //   )
  // },[])
  // const id = 52772;
  // return <Meal id={id}></Meal>;
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
