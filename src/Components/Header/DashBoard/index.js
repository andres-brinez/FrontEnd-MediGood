import "./style.css"

function HeaderDashboard() {
  return <header className="top-nav">
  <div className="left-section">
      <div className="dashboard-icon" onclick="toggleSideNav()">
          <img src="img/dashboard/hospital.png" alt=""dashboard Icon/>
      </div>
      <div className="brand">MediGood</div>
  </div>
  <div className="user">Andres Briñez </div>
  <p  className="logout" >Cerrar sesión</p>
</header>

}

export default HeaderDashboard;
