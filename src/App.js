import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New york" />
        <foter>
          This project was coded by{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            Shima Miri
          </a>{" "}
          and is{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            open-sourced on GitHub
          </a>
          and{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </foter>
      </div>
    </div>
  );
}
