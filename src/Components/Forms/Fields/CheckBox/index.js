import "./style.css"

const CheckBox = (props) => {
  return (
    <div className={props.className}>
      <input type={props.type} id={props.id} name={props.name} />
      <label htmlFor={props.htmlFor}>{props.label}</label>
    </div>
  );

}

export default CheckBox;