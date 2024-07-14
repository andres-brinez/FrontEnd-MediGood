import "./style.css"

function InputPassword(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.htmlFor}>{props.label} <span className="required">*</span></label>
      <div className="password-container">
        <label id="togglePassword" onClick={props.onClick} >Mostrar</label>
        <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} required={props.required} value={props.value} onChange={(e) => props.updateValue(e.target.value)} />
      </div>
    </div>
  )
}

export default InputPassword;