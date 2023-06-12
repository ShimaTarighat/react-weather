import React, { useState } from "react";

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
        <span className="">{Math.round(props.celsius)}</span>{" "}
        <span className="fs-6 position-relative ">
          °C |
          <a href="/" onClick={showFahrenheit} className="text-decoration-none">
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature fs-2">
        <span className="">{Math.round(fahrenheit())}</span>{" "}
        <span className="fs-6 position-relative">
          <a href="/" onClick={showCelsius} className="text-decoration-none">
            {" "}
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
