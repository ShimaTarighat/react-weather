import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature fs-2">
        <strong className="">{Math.round(props.celsius)}</strong>{" "}
        <span className="fs-6 position-relative Units">
          °C <span className="text-black">|</span>
          <a href="/" onClick={showFahrenheit} className="text-decoration-none">
            <span>°F</span>
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature fs-2">
        <strong className="">{Math.round(fahrenheit())}</strong>{" "}
        <span className="fs-6 position-relative Units">
          <a href="/" onClick={showCelsius} className="text-decoration-none">
            °C
          </a>
          <span className="text-black">|</span>
          <span>°F</span>
        </span>
      </div>
    );
  }
}
