import classNames from "classnames";
import React, {useState} from "react";
import "./Card.css";

function Card({item}) {
  // let [classNames, setClassNames] = useState("card");
  const [isChecked, setChecked] = useState(false);

  const clickHandler = () => {
    // if (classNames === "card") {
    //   setClassNames("card card_selected");
    // } else {
    //   setClassNames("card");
    // }
    setChecked(!isChecked)
  };

  return (
    // <div className={classNames}>
      // <div className={"card" + (isChecked ? " card_selected" : "")}>
      <div className={(isChecked ? classNames('card', 'card_selected') : classNames('card'))}>
      <div className="card_oneline">
        <div className="card_header">{item.caption}</div>
        <div className="card_checkbox">
          <input
            type="checkbox"
            className="card_checkbox_value"
            onChange={clickHandler}
          />
        </div>
      </div>
      <div className="card_sep"></div>
      <div className="card_text">{item.model} - {item.text}</div>
    </div>
  );
}

export default Card;
