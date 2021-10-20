import React, { useState } from "react";
import "./Controls.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";

function Controls(props) {
  const noDispl = "control-display-none";

  const [regChCirClicked, setRegChCirClicked] = useState(true);
  const [banClicked, setBanClicked] = useState(true);
  const [penClicked, setPenClicked] = useState(false);
  const [regSqClicked, setRegSqClicked] = useState(false);
  const [regChSqClicked, setRegChSqClicked] = useState(true);

  const regChCirClickHandler = () => {
    setRegChCirClicked(!regChCirClicked);
    setPenClicked(!penClicked);
    setBanClicked(!banClicked);
    setRegSqClicked(false);
    props.onEditMode(!penClicked);
    props.onSave();
  };

  const banClickHandler = () => {
    setBanClicked(!banClicked);
    setRegChCirClicked(!regChCirClicked);
    setPenClicked(!penClicked);
    setRegSqClicked(false);
    props.onEditMode(!penClicked);
    props.onCancel();
  };

  const penClickHandler = () => {
    setPenClicked(!penClicked);
    setRegChCirClicked(!regChCirClicked);
    setBanClicked(!banClicked);
    regSqClicked
      ? setRegChSqClicked(!regChSqClicked)
      : setRegSqClicked(!regSqClicked);
    props.onEditMode(!penClicked);
    props.onSelected(false);
  };

  const regChSqClickHandler = () => {
    setRegChSqClicked(!regChSqClicked);
    setRegSqClicked(!regSqClicked);
    props.onSelected(!regSqClicked);
  };

  const regSqClickHandler = () => {
    setRegSqClicked(!regSqClicked);
    setRegChSqClicked(!regChSqClicked);
    props.onSelected(!regSqClicked);
  };

  return (
    <div className="controls">
      <FaRegCheckCircle
        className={regChCirClicked ? noDispl : ""}
        onClick={regChCirClickHandler}
      />
      <FaBan className={banClicked ? noDispl : ""} onClick={banClickHandler} />
      <FaPen className={penClicked ? noDispl : ""} onClick={penClickHandler} />
      <FaRegSquare
        className={regSqClicked ? noDispl : ""}
        onClick={regSqClickHandler}
      />
      <FaRegCheckSquare
        className={regChSqClicked ? noDispl : ""}
        onClick={regChSqClickHandler}
      />
    </div>
  );
}

export default Controls;
