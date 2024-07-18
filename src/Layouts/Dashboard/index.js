import { Outlet, useNavigate } from "react-router-dom";
import HeaderDashboard from "../../Components/Header/DashBoard";
import NavDashBoard from "../../Components/Nav/DashBoard";
import "./style.css"
import "./formDashboard.css"


function LayoutDashboard() {

  const navigation= useNavigate();

  function logout() {
    navigation("/")
  }

  function hideLogoutConfirmation() {
    var confirmationModal = document.getElementById("logoutConfirmation");
    confirmationModal.style.display = "none";
}


  return <>
    <HeaderDashboard />
    {/* <!-- Contenido del Dashboard --> */}
    <div class="dashboard-container">

      {/* <!-- Barra de navegación lateral --> */}
      <NavDashBoard />
      {/* <!-- Cuadro de confirmación de logout--> */}
    
      {/* <!-- Contenido principal --> */}
      <main className="main-content main-content-dashboard">
      <Outlet />
      </main>
    
    </div>
    <div className="confirmation-modal" id="logoutConfirmation">
        <div class="modal-content">
            <span class="close" onClick={hideLogoutConfirmation}>&times;</span>
            <p>¿Estás seguro de que quieres cerrar sesión?</p>
            <button class="ok" onClick={logout}>Aceptar</button>
            <button class="cancel" onClick={hideLogoutConfirmation}>Cancelar</button>
        </div>
    </div>

    <footer className="footerDashBoard">
      <p>&copy; 2024 Medigood - Andres Felipe Briñez Lopez</p>
    </footer>


  </>
}

export default LayoutDashboard;