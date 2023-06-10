import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span>{Math.round(props.celsius)}</span> <span>°C</span>
    </div>
  );
}
