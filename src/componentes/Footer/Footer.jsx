import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h2 className="footer-logo">Mi Sitio</h2>
          <p className="footer-text">
            Ofrecemos lo mejor en joyería, ropa y tecnología para que luzcas y disfrutes con estilo.
          </p>
        </div>

        <div className="footer-section">
          <h3>Secciones</h3>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/QuienesSomos">Quiénes Somos</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/Contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categorías</h3>
          <ul>
            <li><a href="/productos/joyeria">Joyería</a></li>
            <li><a href="/productos/ropa">Ropa</a></li>
            <li><a href="/productos/electronicos">Electrónicos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Seguinos</h3>
          <div className="social-icons">
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">twitter</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mi Sitio - Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;