import { NavLink, useNavigate } from "react-router-dom";
import "./index.scss";

export default function Sidebar() {
  const navigator = useNavigate();

  const handleLogout = () => {
    navigator("/");
  };
  return (
    <div className="sidebar">
      <h2>EcoCycle <br /> Manager</h2>

      <nav className="menu-links">
        <NavLink
          className={({ isActive }) => [isActive ? "active" : ""].join(" ")}
          to="/dashboard/monitoramento"
        >
          Monitoramento
        </NavLink>
        <NavLink
          className={({ isActive }) => [isActive ? "active" : ""].join(" ")}
          to="/dashboard/relatorios"
        >
          Relatórios
        </NavLink>
      </nav>

      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
