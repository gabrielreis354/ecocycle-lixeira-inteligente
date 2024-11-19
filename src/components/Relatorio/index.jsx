import {useState} from 'react';
import './index.scss';
// import { LineChart, Line, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Relatorio = () => {
  const [filter, setFilter] = useState('weekly');
  const tableData = [
    {id: 1, date: '2024-11-01', wasteProcessed: '5 kg', energyGenerated: '2.5 kWh', carbonAvoided: '1 kg'},
    {id: 2, date: '2024-11-02', wasteProcessed: '6 kg', energyGenerated: '3.0 kWh', carbonAvoided: '1.2 kg'},
    {id: 3, date: '2024-11-03', wasteProcessed: '4 kg', energyGenerated: '2.0 kWh', carbonAvoided: '0.8 kg'},
  ];

  const chartData = [
    {name: '01/11', energy: 2.5, carbon: 1},
    {name: '02/11', energy: 3.0, carbon: 1.2},
    {name: '03/11', energy: 2.0, carbon: 0.8},
  ];

  return (
    <div className="relatorios-page">
      <header className="header">
        <h1>Relatórios</h1>
        <div className="filters">
          <button onClick={() => setFilter('daily')} className={filter === 'daily' ? 'active' : ''}>Diário</button>
          <button onClick={() => setFilter('weekly')} className={filter === 'weekly' ? 'active' : ''}>Semanal</button>
          <button onClick={() => setFilter('monthly')} className={filter === 'monthly' ? 'active' : ''}>Mensal</button>
        </div>
      </header>

      <main className="main-content">
        <section className="chart-section">
          <h2>Desempenho</h2>
          {/*<ResponsiveContainer width="100%" height={300}>*/}
          {/*  <LineChart data={chartData}>*/}
          {/*    <Line type="monotone" dataKey="energy" stroke="#2d8c3b" strokeWidth={2} name="Energia Gerada" />*/}
          {/*    <Line type="monotone" dataKey="carbon" stroke="#1f5635" strokeWidth={2} name="Carbono Evitado" />*/}
          {/*    <Tooltip />*/}
          {/*    <Legend />*/}
          {/*  </LineChart>*/}
          {/*</ResponsiveContainer>*/}
        </section>

        <section className="table-section">
          <h2>Detalhes</h2>
          <table>
            <thead>
            <tr>
              <th>Data</th>
              <th>Resíduos Processados</th>
              <th>Energia Gerada</th>
              <th>Carbono Evitado</th>
            </tr>
            </thead>
            <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.date}</td>
                <td>{row.wasteProcessed}</td>
                <td>{row.energyGenerated}</td>
                <td>{row.carbonAvoided}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer className="footer">
        <button>Exportar Relatório</button>
      </footer>
    </div>
  );
};

export default Relatorio;