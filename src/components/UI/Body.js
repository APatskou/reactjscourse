import React from "react";
import "./Body.css";
import Card from "./Card";

function Body(props) {
  return (
    <div className="body">
      {props.items.map(item => {return <Card item={item} key={item.id}/>})}
    </div>
  );
}

export default Body;
