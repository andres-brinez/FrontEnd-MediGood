import { Link } from "react-router-dom";
import "./style.css"

function HeaderDashboard() {
  return <header className="top-nav headerDashBoard">
  <Link to={"/"}>
  <div className="left-section">
      <div className="dashboard-icon" onclick="toggleSideNav()">
          <img src="img/dashboard/hospital.png" alt=""dashboard Icon/>
      </div>
      <div className="brand">MediGood</div>
  </div>
  </Link>
  <div className="user">Andres Briñez </div>
  <p  className="logout" >Cerrar sesión</p>
</header>

}

export default HeaderDashboard;
