/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetion = ["car", "toe", "shoe", "homework"];
  let where = ["on the street", "in my car", "in my house"];

  let proIndex = 0;
  let subjIndex = 0;
  let actionIndex = 0;
  let possetionIndex = 0;
  let whereIndex = 0;

  return;
  pronoun[proIndex] +
    "" +
    subject[subjIndex] +
    "" +
    action[actionIndex] +
    "" +
    possetion[possetionIndex] +
    "" +
    where[whereIndex];
};
