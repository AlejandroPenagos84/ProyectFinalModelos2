import "./navBar.css";

function NavBar({toggleSideBar})  {
  return (
    <div className="nav-Container">
      <div className="btnMenu">
        <button className="sideBar_button" onClick={toggleSideBar}>
          ☰ Tipo de Gestion
        </button>
      </div>
    </div>
  );
}

export default NavBar;
