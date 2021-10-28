import React from "react";

function Field(props) {
  return (
    <div
      className={props.className}
      contentEditable={props.isEdited}
      suppressContentEditableWarning={true}
      id={props.id}
    >
      {props.value}
    </div>
  );
}

export default Field;
