import "./Page.css";
import Header from "./Header.js";
import Body from './Body.js'

function Page(props) {
  const changeHandler = (newCard) => {
    props.onChange(newCard);
  };

  return (
    <div className="page">
      <Header header={props.header}></Header>
      <Body cards={props.cards} onChange={changeHandler}></Body>
    </div>
  );
}

export default Page;
