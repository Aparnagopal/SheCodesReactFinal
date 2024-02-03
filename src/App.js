import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://radiant-melomakarona-b6fba3.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aparna Gopalakrishnan
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Aparnagopal/Reactweek5"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://wonderful-donut-1c2dcf.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
