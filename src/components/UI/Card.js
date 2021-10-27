import classNames from "classnames";
import React, { useState } from "react";
import "./Card.css";
import Controls from "./Controls";

function Card(props) {
  const [isSelected, setSelected] = useState(false);
  const [isEdited, setEdited] = useState(false);

  const [enteredValues, setEnteredValues] = useState({
    curBrand: props.item.brand,
    curModel: props.item.model,
    curYear: props.item.year,
    curDescription: props.item.description,
    enteredBrand: props.item.brand,
    enteredModel: props.item.model,
    enteredYear: props.item.year,
    enteredDescription: props.item.description,
  });

  const setEditedHandler = (value) => {
    setEdited(value);
  };

  const setSelectedHandler = (value) => {
    setSelected(value);
  };

  const saveClickHandler = () => {
    setEnteredValues({
      ...enteredValues,
      curBrand: enteredValues.enteredBrand,
      curModel: enteredValues.enteredModel,
      curYear: enteredValues.enteredYear,
      curDescription: enteredValues.enteredDescription,
    });
    props.onChange({
      id: props.item.id,
      brand: enteredValues.enteredBrand,
      model: enteredValues.enteredModel,
      year: enteredValues.enteredYear,
      description: enteredValues.enteredDescription,
    });
  };

  const cancelClickHandler = () => {
    setEnteredValues({
      ...enteredValues,
      enteredBrand: enteredValues.curBrand,
      enteredModel: enteredValues.curModel,
      enteredYear: enteredValues.curYear,
      enteredDescription: enteredValues.curDescription,
    });
  };

  const updateValues = (event) => {
    setEnteredValues({
      ...enteredValues,
      [event.target.id]: event.target.innerText,
    });
  };

  return (
    <div className={classNames({ card: true, card_selected: isSelected })}>
      <div className="card_oneline">
        <div className="card_header">
          <div
            className={classNames({ edited: isEdited })}
            id="enteredBrand"
            contentEditable={isEdited}
            onBlur={updateValues}
            suppressContentEditableWarning={true}
          >
            {enteredValues.enteredBrand}
          </div>
          <div
            className={classNames({ edited: isEdited })}
            id="enteredModel"
            contentEditable={isEdited}
            onBlur={updateValues}
            suppressContentEditableWarning={true}
          >
            {enteredValues.enteredModel}
          </div>
          <div
            className={classNames({ edited: isEdited })}
            id="enteredYear"
            contentEditable={isEdited}
            onBlur={updateValues}
            suppressContentEditableWarning={true}
          >
            {enteredValues.enteredYear}
          </div>
        </div>
        <div className="card_checkbox">
          <Controls
            onSelected={setSelectedHandler}
            onEditMode={setEditedHandler}
            onSave={saveClickHandler}
            onCancel={cancelClickHandler}
          />
        </div>
      </div>
      <div className="card_sep"></div>
      <div
        className={classNames({ card_description: true, edited: isEdited })}
        id="enteredDescription"
        contentEditable={isEdited}
        onBlur={updateValues}
        suppressContentEditableWarning={true}
      >
        {enteredValues.enteredDescription}
      </div>
    </div>
  );
}

export default Card;
