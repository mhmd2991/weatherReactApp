import React, { useState } from "react";
import Clear from "../../imgs/clear.png";
import Clouds from "../../imgs/clouds.png";
import Rain from "../../imgs/rain.png";
import Snow from "../../imgs/snow.png";
import Mist from "../../imgs/mist.png";
import Drizzle from "../../imgs/drizzle.png";

import "./weather.css";

/*
This line defines a functional component called Weather.
The component takes in a prop called weather,
which is an object containing the weather data fetched from the API.
*/
export default function WeatherResult({ weather }) {
  let imgPath = "";

  switch (weather.data.weather[0].main) {
    case "Clear":
      imgPath = Clear;
      break;

    case "Clouds":
      imgPath = Clouds;
      break;

    case "Clouds":
      imgPath = Clouds;
      break;

    case "Rain":
      imgPath = Rain;
      break;

    case "Snow":
      imgPath = Snow;
      break;

    case "Haze":
      imgPath = Mist;
      break;

    case "Mist":
      imgPath = Mist;
      break;

    case "Drizzle":
      imgPath = Drizzle;
      break;

    case "Wind":
      imgPath = Mist;
      break;

    default:
      imgPath = "";
  }
  
  return (
    <div className="weather-details">
      <div className="weather-img">
        <img src={imgPath} alt="" />
      </div>
      <h2 className="temperature">{parseInt(weather.data.main.temp)}°C</h2>
      <h3 className="desc">{weather.data.weather[0].description}</h3>
      <h3 className="city">{weather.data.name}</h3>
      <div className="details">
        <div className="humidity">
          <i className="fa-solid fa-water"></i>
          <div className="humidity-details">
            <h4>humidity</h4>
            <span>{weather.data.main.humidity}%</span>
          </div>
        </div>
        <div className="wind">
          <i className="fa-solid fa-wind"></i>
          <div className="wind-details">
            <h4>wind speed</h4>
            <span>{parseInt(weather.data.wind.speed)} Km/H</span>
          </div>
        </div>
      </div>
    </div>
  );
}
