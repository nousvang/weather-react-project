import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div lcassName="container">
        <h1> Weather App </h1>
        <Weather defaultCity="Tokyo" />
        <footer>
          {" "}
          Created by Nou Vang and is{" "}
          <a
            href="https://github.com/nousvang/weather-react-project"
            target="_blank"
            rel="noreferrer"
          >
            opened-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
