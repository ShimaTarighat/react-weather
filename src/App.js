import React from "react";
import Weather from "./Weather";
import Navbar from "./Navbar";
import logo from "./logo.jpg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="my-3">
          <img src={logo} alt="logo of shecodes react" className="logo" />
        </div>
        <Navbar />
        <div className="mt-3 mb-5">
          <div className="border rounded p-3">
            <Weather defaultCity="Zahedan" />
          </div>
          <footer className="mt-3 text-black">
            This project was coded by{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              Shima Miri
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/ShimaTarighat/react-weather.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://sparkling-sorbet-c21d38.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
