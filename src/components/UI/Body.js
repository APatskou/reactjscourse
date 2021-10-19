import React from "react";
import "./Body.css";
import Card from "./Card";

function Body(props) {
  return (
    <div className="body">
      <Card item={props.items[0]}></Card>
      <Card item={props.items[1]}></Card>
      <Card item={props.items[2]}></Card>
      <Card item={props.items[3]}></Card>
      <Card item={props.items[4]}></Card>
      <Card item={props.items[5]}></Card>
      <Card item={props.items[6]}></Card>
      <Card item={props.items[7]}></Card>
    </div>
  );
}

export default Body;
