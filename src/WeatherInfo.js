import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo mt-2">
      <div className="row mt-4">
        {" "}
        <h1 className="fs-3 fw-semibold">{props.data.city}</h1>
        <ul className="list-unstyled ">
          <li className="fw-semibold fs-5 pb-2">
            <FormattedDate date={props.data.date} />
          </li>
          <li className="">{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex WeatherTemperature">
            <div className="WeatherIcon float-left pt-4 pe-1">
              <WeatherIcon code={props.data.icon} size={60} />
            </div>
            <div className="foat-left pt-4">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6 pt-4">
          <ul className="list-unstyled mt-2">
            <li className="pb-2">Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}
