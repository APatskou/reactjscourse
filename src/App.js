import React from "react";
import "./App.css";
import Page from "./components/UI/Page.js";
import Header from "./components/UI/Header.js";
import Body from "./components/UI/Body.js";

const App = () => {
  const cards = [
    { id: 1, caption: "Toyota", text: "2012", model: 'Rav4' },
    { id: 2, caption: "BMW", text: "2009", model: 'X5' },
    { id: 3, caption: "Opel", text: "2019", model: 'Mokka' },
    { id: 4, caption: "Mazda", text: "2015", model: 'CX-5' },
    { id: 5, caption: "Audi", text: "2001", model: 'A4' },
    { id: 6, caption: "Ford", text: "2005", model: 'Focus' },
    { id: 7, caption: "Kia", text: "2020", model: 'Sorento' },
    { id: 8, caption: "Volkswagen", text: "1998", model: 'Touareg' },
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
