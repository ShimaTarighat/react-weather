import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  <div className="WeatherForecastDay">
    <div className="row my-3">
      <div className="col">
        <div className="mb-2">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={35} />
        <div>
          <span>{maxTemperature}</span>
          <span className="opacity-75">{minTemperature}</span>
        </div>
      </div>
    </div>
  </div>;
}
