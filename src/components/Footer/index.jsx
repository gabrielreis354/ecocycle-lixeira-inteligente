import "./index.scss";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-content-top">
          <h1>EcoCycle</h1>
        </div>
        <div className="footer-content-bottom">
          <div className="copyright">
            Projeto acadêmico para a {" "}
            <Link to={"https://fiap.com.br/"}>Fiap</Link>.
          </div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/funcionamento">Como Funciona</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
