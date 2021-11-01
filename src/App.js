import React, {useState} from "react";
import Page from "./components/UI/Page.js";

const App = () => {
  const [cards, setCards] = useState([
    { id: 1, brand: "Toyota", model: "Rav4", year: "2001", description: "Небитнекрашен. Адин хазяин." },
    { id: 2, brand: "BMW", model: "X5", year: "2003", description: "Небитнекрашен. Адин хазяин." },
    { id: 3, brand: "Opel", model: "Mokka", year: "2015", description: "Небитнекрашен. Адин хазяин." },
    { id: 4, brand: "Mazda", model: "CX", year: "1991", description: "Небитнекрашен. Адин хазяин." },
    { id: 5, brand: "Audi", model: "A4", year: "2020", description: "Небитнекрашен. Адин хазяин." },
    { id: 6, brand: "Ford", model: "Focus", year: "2013", description: "Небитнекрашен. Адин хазяин." },
    { id: 7, brand: "Kia", model: "Sorento", year: "1980", description: "Небитнекрашен. Адин хазяин." },
    { id: 8, brand: "Volkswagen", model: "Touareg", year: "2016", description: "Небитнекрашен. Адин хазяин." },
    { id: 9, brand: "Kia", model: "Rio", year: "2009", description: "Небитнекрашен. Адин хазяин." },
    { id: 10, brand: "Mazda", model: "6", year: "2010", description: "Небитнекрашен. Адин хазяин." },
  ])

  const header = "Авто из Америки и Европы";

  const changeHandler = (newCard) => {
    const newCardCopy = {...newCard};
    let stateCopy = [...cards];
    stateCopy[newCard.id - 1] = newCardCopy;
    setCards([...stateCopy]);
  };

  return (
    <div>
      <Page header={header} cards={cards} onChange={changeHandler}/>
    </div>
  );
};

export default App;
