import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../src/assets/logo.png"></img>
        <span>Celi</span>
      </div>

      <button className="menu-toggle">
        ☰
      </button>

      <ul>
        <Link to="/" style={{ marginRight: "10px" }}>Dashboard</Link>
        <Link to="/new-order">Nuevo Pedido</Link>
      </ul>
    </nav>
  );
};

export default Navbar;