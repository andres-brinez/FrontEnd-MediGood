import { Link } from "react-router-dom";
import "./style.css"
import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";

function HeaderDashboard() {
  const { emailUser} = useContext(GlobalContext);
  function showLogoutConfirmation() {
    var confirmationModal = document.getElementById("logoutConfirmation");
    confirmationModal.style.display = "block";
  }

  return <header className="top-nav headerDashBoard">
  <Link to={"/"}>
  <div className="left-section">
      <div className="dashboard-icon" onclick="toggleSideNav()">
          <img src="../../../img/dashboard/hospital.png" alt="dashboard Icon"/>
      </div>
      <div className="brand">MediGood</div>
  </div>
  </Link>
  <div className="user">{emailUser} </div>
  <p  className="logout" onClick={showLogoutConfirmation}>Cerrar sesión</p>
</header>



}

export default HeaderDashboard;
