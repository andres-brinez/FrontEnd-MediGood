const Input = (props) => {

  const { type = "text" } = props;

  return (
    <div className={props.className}>
      <label htmlFor={props.htmlFor}>{props.label} <span ClassName="required">*</span></label>
      <input type={type} id={props.id} name={props.name} placeholder={props.placeholder} required={props.required} value={props.value} onChange={(e) => props.updateValue(e.target.value)} />
    </div>

  );
};


export default Input;