import React, { useState } from "react";
import "./Controls.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";

function Controls(props) {

  const noDispl = "control-display-none";

  const [isSelected, setIsSelected] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const isSavedHandler = () => {
    setIsEdited(!isEdited);
    props.onEditMode(!isEdited);
    props.onSave();
  };

  const isCanceledHandler = () => {
    setIsEdited(!isEdited);
    props.onEditMode(!isEdited);
    props.onCancel();
  };

  const isEditedHandler = () => {
    setIsEdited(!isEdited);
    setIsSelected(false);
    props.onEditMode(!isEdited);
    props.onSelected(false);
  };

  const isSelectedHandler = () => {
    setIsSelected(!isSelected);
    props.onSelected(!isSelected);
  };

  return (
    <div className="controls">
      <FaRegCheckCircle
        className={!isEdited ? noDispl : ""}
        onClick={isSavedHandler}
      />
      <FaBan className={!isEdited ? noDispl : ""} onClick={isCanceledHandler} />

      <FaPen className={isEdited ? noDispl : ""} onClick={isEditedHandler} />

      <FaRegSquare
        className={isSelected | isEdited ? noDispl : ""}
        onClick={isSelectedHandler}
      />
      <FaRegCheckSquare
        className={!isSelected | isEdited ? noDispl : ""}
        onClick={isSelectedHandler}
      />
    </div>
  );
}

export default Controls;
