import Monitoramento from "../../components/Monitoramento";
import Relatorio from "../../components/Relatorio";
import Sidebar from "../../components/Sidebar";
import "./index.scss";
import { Routes, Route, Navigate } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Routes>
          <Route index element={<Navigate to="/dashboard/monitoramento" />} />
          <Route path="monitoramento" element={<Monitoramento />} />
          <Route path="relatorios" element={<Relatorio />} />

        </Routes>
      </div>
    </div>
  );
}
