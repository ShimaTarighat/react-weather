import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row my-3">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const url = "https://api.openweathermap.org/data/2.5/onecall?";
    const latitude = props.coordinates.lat;
    const longitude = props.coordinates.lon;
    const appid = "7ed26a6948c661d05fafe7355b41b2ec";
    const units = "metric";
    const apiUrl = `${url}lat=${latitude}&lon=${longitude}&appid=${appid}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
