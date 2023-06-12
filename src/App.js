import React from "react";
import Weather from "./Weather";
import Navbar from "./Navbar";
import Logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="logo-bg my-3">
          <img src={Logo} alt="logo of shecodes react" className=" logo" />
        </div>
        <Navbar />
        <div className="mt-3 mb-5">
          <div className="border rounded p-3">
            <Weather defaultCity="New york" />
          </div>
          <footer className="mt-3">
            This project was coded by{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              Shima Miri
            </a>{" "}
            and is{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
