import React, { useSate } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  Const [weatherData, setWeatherData] = useSate({ready: false});
    function handleResponse(response){
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            descriction: response.data.weather[0].description,
            date: "Wednesday 07:00",
        });
        setReady(true);
    }
  
    if (weatherData.ready) {
        return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search a city"
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      <h1>{weather.data.city}</h1>
      <ul>
        <li><FormattedDate date={weatherData.date}/></li>
        <li className="text-capitalize">{weather.data.description}</li>
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
          <span className="temperature"> {Math.round(weatherData.temperature)} </span>
          <span className="unit"> °C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}</li>
            <li>Wind: {weatherData.wind}</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
    } else {
        
    const apiKey = `e84830669835db80ec691f78d61d1107`;
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.deafaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
    }

}
