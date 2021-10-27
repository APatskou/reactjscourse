import React, { useState } from "react";
import {
  FaRegCheckCircle,
  FaBan,
  FaPen,
  FaRegSquare,
  FaRegCheckSquare,
} from "react-icons/fa";

function Controls(props) {
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

  const showEditMode = () => {
    return (
      <div>
        <FaRegCheckCircle onClick={isSavedHandler} />
        <FaBan onClick={isCanceledHandler} />
      </div>
    );
  };

  const showViewMode = () => {
    return (
      <div>
        <FaPen onClick={isEditedHandler} />
        {isSelected ? (<FaRegCheckSquare onClick={isSelectedHandler}/>) : (<FaRegSquare onClick={isSelectedHandler} />)}
      </div>
    );
  };

  return (
    <div>
      {isEdited ? showEditMode() : showViewMode()}
    </div>
  );
}

export default Controls;
