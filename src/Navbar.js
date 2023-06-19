import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar sticky-top rounded mt-2 ">
      <nav className="navbar navbar-expand-lg rounded PromotionBanner ">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">
            Current Weather
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/"
                >
                  5 Day Forecast
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Hourly Forecast
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
