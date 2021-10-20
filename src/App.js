import React from "react";
import "./App.css";
import Page from "./components/UI/Page.js";
import Header from "./components/UI/Header.js";
import Body from "./components/UI/Body.js";

const App = () => {
  const cards = [
    { id: 1, caption: "Toyota", text: "Rav4" },
    { id: 2, caption: "BMW", text: "X5" },
    { id: 3, caption: "Opel", text: "Mokka" },
    { id: 4, caption: "Mazda", text: "CX" },
    { id: 5, caption: "Audi", text: "A4" },
    { id: 6, caption: "Ford", text: "Focus" },
    { id: 7, caption: "Kia", text: "Sorento" },
    { id: 8, caption: "Volkswagen", text: "Touareg" },
    { id: 9, caption: "Kia", text: "Rio" },
    { id: 10, caption: "Mazda", text: "6" },
  ];

  const header = "Авто из Америки и Европы";

  return (
    <div>
      <Page />
      <Header text={header}></Header>
      <Body items={cards}></Body>
    </div>
  );
};

export default App;
