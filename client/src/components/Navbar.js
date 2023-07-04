import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { BsSearch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand ">
          <Link className="nav-link" to="/">
            <AiFillHome />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            {/* <li>
              <button>Categories</button>
            </li> */}
            <li>
              <Link className="nav-link" to="/myRecipes">
                My Recipes
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/favourites">
                Favourites
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <div className="search">
                <input
                  type="search"
                  placeholder="Search..."
                  onChange={handleChange}
                  value={searchInput}
                ></input>
                <Link to={`/search/${searchInput}`}>
                  {searchInput ? (
                    <button>
                      <BsSearch />
                    </button>
                  ) : (
                    <button disabled>
                      <BsSearch />
                    </button>
                  )}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
