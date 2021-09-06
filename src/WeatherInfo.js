import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/part;y_cloudy.png"
              alt="Mostly Cloudy"
              className="float-left"
            ></img>
            <div className="float-left">
              <span className="temperature">
                {" "}
                {Math.round(props.data.temperature)}{" "}
              </span>
              <span className="unit"> °C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {props.data.humidity}</li>
                <li>Wind: {props.data.wind}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
