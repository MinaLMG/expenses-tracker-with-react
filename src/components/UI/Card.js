import "./Card.css";
function Card(props) {
  let classes = "";
  if (props.className) {
    classes = "card " + props.className;
  } else {
    classes = "card";
  }
  return <div className={classes}>{props.children}</div>;
}
export default Card;
