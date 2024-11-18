import {NavLink, useNavigate} from "react-router-dom";
import "./index.scss";

export default function Sidebar() {
  const navigator = useNavigate();

  const handleLogout = () => {
    navigator("/");
  };
  return (
    <div className="sidebar">
      <nav className="">
        <NavLink
          className={({isActive}) => [isActive ? "menu-item active" : "menu-item"].join(" ")}
          to="/dashboard/monitoramento"
        >
          Monitoramento
        </NavLink>
        <br/>
        <NavLink
          className={({isActive}) => [isActive ? "menu-item active" : "menu-item"].join(" ")}
          to="/dashboard/relatorios"
        >
          Relatórios
        </NavLink>
      </nav>

      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
