import React, { useState } from "react";
import axios from "./axios";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCty);

  function handleResponse(Response) {
    setWeatherData({
      ready: true,
      coordinates: Response.data.coord,
      temperature: Response.data.main.temp,
      humidity: Response.data.main.humidity,
      date: new Date(Response.data.dt * 1000),
      description: Response.data.Weather[0].description,
      icon: Response.data.Weather[0].icon,
      wind: Response.data.wind.speed,
      city: Response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function Search() {
    const url = "https://api.openweathermap.org/data/2.5/weather?";
    const appid = "8d9838178b5b401f1b4e7cb5af18e210";
    const units = "metric";
    const apiUrl = `${url}q=${city}&appid=${appid}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form onSUBMIT={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={WeatherData} />
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
