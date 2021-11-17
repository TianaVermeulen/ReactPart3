// import animals, { useAnimal } from "./data";

// // Destuctured array

// const [cat, dog] = animals;

// const [animal, makesound] = useAnimal;
// makesound();

// // Destructured object

// const {name, sound} = cat;

// const {name: catName, sound: catSound} = cat;

// const {name = "Fluffy", sound = "Purr"} = cat;

// const {name, sound, feedingRequirements: {food, water}} = cat;



// CHALLENGE: uncomment the code below and see the car stats rendered
import React, {useState} from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const {honda, tesla} = cars;

const {speedStats:{topSpeed: hondaTopSpeed}} = honda;
const {speedStats:{topSpeed: teslaTopSpeed}} = tesla;

const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);