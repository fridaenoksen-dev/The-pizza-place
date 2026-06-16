import React from "react";
import { createRoot } from "react-dom";

const Pizza = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "The Pizza Place"),
    React.createElement(Pizza, {
      name: "The Pepperoni Piza",
      description: "Some dope pizza",
    }),
    React.createElement(Pizza, {
      name: "Spicy Beef",
      description: "Just the right amount of spice",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "For those who like pinapple",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "With white sause",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
