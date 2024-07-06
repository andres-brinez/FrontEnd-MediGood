import { Link } from 'react-router-dom';
import './style.css';
const Button = ({ ruta,type, text, onClick }) => {
  return (
    <Link to={"/"+ruta}>
      <button  type={type} onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

export default Button;