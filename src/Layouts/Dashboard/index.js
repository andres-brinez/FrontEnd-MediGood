import { Outlet } from "react-router-dom";
import HeaderDashboard from "../../Components/Header/DashBoard";
import NavDashBoard from "../../Components/Nav/DashBoard";
import "./style.css"

function LayoutDashboard() {
  return <>
    <HeaderDashboard />
    {/* <!-- Contenido del Dashboard --> */}
    <div class="dashboard-container">

      {/* <!-- Barra de navegación lateral --> */}
      <NavDashBoard/>

      {/* <!-- Contenido principal --> */}
      <main className="main-content">
      <Outlet />
      </main>
    
    </div>

    <footer className="footerDashBoard">
      <p>&copy; 2024 Medigood - Andres Felipe Briñez Lopez</p>
    </footer>


  </>
}

export default LayoutDashboard;