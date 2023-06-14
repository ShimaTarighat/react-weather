import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="text-start">day</div>
          <WeatherIcon code="01d" size="35" />
          <div>
            <span className="text-center">20</span>°
            <span className="text-center opacity-75">10</span>°
          </div>
        </div>
      </div>
    </div>
  );
}
