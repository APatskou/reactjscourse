import classNames from "classnames";
import React, { useState } from "react";
import "./Card.css";
import Controls from "./Controls";
import Field from "./Field";

function Card(props) {
  const [isSelected, setSelected] = useState(false);
  const [isEdited, setEdited] = useState(false);

  const [values, setValues] = useState({
    current: {
      brand: props.item.brand,
      model: props.item.model,
      year: props.item.year,
      description: props.item.description,
    },
    entered: {
      brand: props.item.brand,
      model: props.item.model,
      year: props.item.year,
      description: props.item.description,
    },
  });

  const setEditedHandler = (value) => {
    setEdited(value);
  };

  const setSelectedHandler = (value) => {
    setSelected(value);
  };

  const saveClickHandler = () => {
    setValues({
      ...values,
      current: values.entered,
    });
    props.onChange({
      id: props.item.id,
      ...values.entered,
    });
  };

  const cancelClickHandler = () => {
    setValues({
      ...values,
      entered: values.current,
    });
  };

  const updateValues = (event) => {
    const newValues = {
      ...values.entered,
      [event.target.id]: event.target.innerText,
    };
    setValues({
      ...values,
      entered: newValues,
    });
  };

  return (
    <div className={classNames({ card: true, card_selected: isSelected })}>
      <div className="card_oneline">
        <div className="card_header">
          <div onBlur={updateValues}>
            <Field
              className={classNames({ edited: isEdited })}
              id="brand"
              isEdited={isEdited}
              value={values.entered.brand}
            />
            <Field
              className={classNames({ edited: isEdited })}
              id="model"
              isEdited={isEdited}
              value={values.entered.model}
            />
            <Field
              className={classNames({ edited: isEdited })}
              id="year"
              isEdited={isEdited}
              value={values.entered.year}
            />
          </div>
        </div>
        <div className="card_checkbox">
          <Controls
            onSelected={setSelectedHandler}
            onEditMode={setEditedHandler}
            onSave={saveClickHandler}
            onCancel={cancelClickHandler}
            isEdited={isEdited}
            isSelected={isSelected}
          />
        </div>
      </div>
      <div className="card_sep"></div>
      <div onBlur={updateValues}>
        <Field
          className={classNames({ card_description: true, edited: isEdited })}
          id="description"
          isEdited={isEdited}
          value={values.entered.description}
        />
      </div>
    </div>
  );
}

export default Card;
