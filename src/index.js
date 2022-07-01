import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let wh = window.innerHeight / 2,
  ww = window.innerWidth / 2,
  img = document.getElementsByTagName("img")[0];

function sway(xPos, yPos) {
  img.style.transform =
    "rotateX(" + (yPos - wh) / 25 + "deg) rotateY(" + (xPos - ww) / 25 + "deg)";
}

document.addEventListener("mousemove", function (e) {
  sway(e.clientX, e.clientY);
});

document.addEventListener("touchmove", function (e) {
  e.preventDefault();
  var touch = e.targetTouches[0];
  if (touch) {
    sway(touch.pageX, touch.pageY);
  }
});
