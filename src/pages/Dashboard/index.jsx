import Monitoramento from "../../components/Monitoramento";
import Relatorio from "../../components/Relatorio";
import Sidebar from "../../components/Sidebar";
import "./index.scss";
import {Navigate, Route, Routes} from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="header">
        <h2>EcoCycle Manager</h2>
      </div>
      <Sidebar/>
      <div className="main">
        <div className="dashboard-content">
          <Routes>
            <Route index element={<Navigate to="/dashboard/monitoramento"/>}/>
            <Route path="monitoramento" element={<Monitoramento/>}/>
            <Route path="relatorios" element={<Relatorio/>}/>

          </Routes>
        </div>
      </div>


      <div className="footer">Footer</div>
    </div>
  )
    ;
}
