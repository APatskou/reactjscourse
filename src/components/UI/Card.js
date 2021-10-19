import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card_header">{props.item.caption}</div>
      <div className="card_sep"></div>
      <div className="card_text">{props.item.text}</div>
    </div>
  );
}

export default Card;
