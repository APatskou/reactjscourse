import classNames from "classnames";
import React, { useState } from "react";
import "./Card.css";
import Controls from "./Controls";

function Card({ item }) {
  const [isSelected, setSelected] = useState(false);
  const [isEdited, setEdited] = useState(false);
  const [header, setHeader] = useState(item.caption);
  const [enteredHeader, setEnteredHeader] = useState(item.caption);
  const [text, setText] = useState(item.text);
  const [enteredText, setEnteredText] = useState(item.text);

  const setEditedHandler = (value) => {
    setEdited(value);
  };

  const setSelectedHandler = (value) => {
    setSelected(value);
  };

  const saveClickHandler = () => {
    setHeader(enteredHeader);
    setText(enteredText);
  };

  const cancelClickHandler = () => {
    setEnteredHeader(header);
    setEnteredText(text);
  };

  const updateHeader = (event) => {
    setEnteredHeader(event.target.innerText);
  };

  const updateText = (event) => {
    setEnteredText(event.target.innerText);
  };

  return (
    <div className={classNames({ card: true, card_selected: isSelected })}>
      <div className="card_oneline">
        <div
          className={classNames({
            card_header: true,
            card_header_edited: isEdited,
          })}
          contentEditable={isEdited}
          onInput={updateHeader}
          suppressContentEditableWarning={true}
        >
          {enteredHeader}
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
        className={classNames({ card_text: true, card_text_edited: isEdited })}
        contentEditable={isEdited}
        onInput={updateText}
        suppressContentEditableWarning={true}
      >
        {enteredText}
      </div>
    </div>
  );
}

export default Card;
