import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastday from "./WeatherForecastday";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.list);
    console.log(response.data.list);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 39) {
              if (
                index === 0 ||
                index === 8 ||
                index === 16 ||
                index === 24 ||
                index === 32
              ) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastday data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "cf1b44532ce6d77ba4516c2de39d4ead";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
