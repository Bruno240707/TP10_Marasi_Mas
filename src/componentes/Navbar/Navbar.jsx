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
        <Link to="/"><p>Home</p></Link>

        <Link to="/QuienesSomos"><p>Quienes somos</p></Link>

        <Link to="/Contacto"><p>Contacto</p></Link>
      </ul>
    </nav>
  );
};

export default Navbar;