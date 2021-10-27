import React from "react";
import "./Body.css";
import Card from "./Card";

function Body(props) {
  const changeHandler = (newCard) => {
    props.onChange(newCard);
  };

  return (
    <div className="body">
      {props.cards.map((item) => {
        return <Card item={item} key={item.id} onChange={changeHandler} />;
      })}
    </div>
  );
}

export default Body;
