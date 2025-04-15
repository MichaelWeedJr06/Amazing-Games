import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Make sure Bootstrap JS is imported (this includes Popper.js for dropdowns)
import "../css/NavBar.css";
import { Link } from "react-router";
import { useFilterContext } from "../context/FilterContext";

function Navbar() {
  const { isFilter, changeFilter, removeFilter } = useFilterContext();

  function onClick(e) {
    e.preventDefault();

    const filter = e.target.id;
    let filterName = "";

    if (filter === "0") {
      filterName = "release-date";
    } else if (filter === "1") {
      filterName = "popularity";
    } else if (filter === "2") {
      filterName = "alphabetical";
    } else if (filter === "3") {
      filterName = "relevance";
    }

    if (isFilter(filterName)) {
      console.log("The filter is already applied, no need to change it.");
      return;
    }

    console.log(
      isFilter(filterName) ? "Removing filter:" : "Applying filter:",
      filterName
    );

    if (isFilter(filterName)) {
      removeFilter();
    } else {
      changeFilter(filterName);
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light MyNav">
      <div className="container-fluid">
        <Link className="Nav-links-web-title" to="/home">
          Amazing Games
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myNavbar"
          aria-controls="myNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="Nav-links" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle Nav-links"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button
                    className="dropdown-item release-date"
                    id="0"
                    onClick={onClick}
                  >
                    Release Date
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item popularity"
                    id="1"
                    onClick={onClick}
                  >
                    Popularity
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item alphabetical"
                    id="2"
                    onClick={onClick}
                  >
                    Alphabetical
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item relevance"
                    id="3"
                    onClick={onClick}
                  >
                    Relevance
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="Nav-links" to="/categories">
                Categories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
