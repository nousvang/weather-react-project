import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTY_CLOUDY_NIGHT",
    "03d": "SCATTERED_CLOUDS",
    "03n": "SCATTERED_CLOUDS",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10n": "RAIN",
    "10d": "RAIN",
    "11n": "RAIN",
    "11d": "RAIN",
    "13n": "SNOW",
    "13d": "SNOW",
    "50n": "FOG",
    "50d": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="blue"
      size={64}
      animate={true}
    />
  );
}
