import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Make sure Bootstrap JS is imported (this includes Popper.js for dropdowns)
import "../css/NavBar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light MyNav">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Amazing Games
        </a>
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
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
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
                  <button className="dropdown-item">Release Date</button>
                </li>
                <li>
                  <button className="dropdown-item">Popularity</button>
                </li>
                <li>
                  <button className="dropdown-item">Alphabetical</button>
                </li>
                <li>
                  <button className="dropdown-item">Relevance</button>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
