import "./style.css";

// El estado se sercibe de los options (props)
const Select = (props) => {
const handleChange=(e)=>{
  props.updateValue(e.target.value)
}

  return (
    <div>
      <label>{props.label}</label>
      <select value={props.value} onChange={handleChange}>
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;  