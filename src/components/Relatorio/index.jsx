import { useState, useEffect } from "react";
import "./index.scss";
import data from "../../assets/Data/data.json";
// import { LineChart, Line, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Relatorio = () => {
  const [filtroInicio, setFiltroInicio] = useState("");
  const [filtroFim, setFiltroFim] = useState("");

  const [dadosFiltrados, setDadosFiltrados] = useState(data);

  const [totalEnergia, setTotalEnergia] = useState(0);
  const [totalResiduos, setTotalResiduos] = useState(0);
  const [totalCarbono, setTotalCarbono] = useState(0);

  // const [filter, setFilter] = useState("weekly");
  // const tableData = [
  //   {
  //     id: 1,
  //     date: "2024-11-01",
  //     wasteProcessed: "5 kg",
  //     energyGenerated: "2.5 kWh",
  //     carbonAvoided: "1 kg",
  //   },
  //   {
  //     id: 2,
  //     date: "2024-11-02",
  //     wasteProcessed: "6 kg",
  //     energyGenerated: "3.0 kWh",
  //     carbonAvoided: "1.2 kg",
  //   },
  //   {
  //     id: 3,
  //     date: "2024-11-03",
  //     wasteProcessed: "4 kg",
  //     energyGenerated: "2.0 kWh",
  //     carbonAvoided: "0.8 kg",
  //   },
  // ];

  useEffect(() => {
    const filtrarDados = () => {
      if (!filtroInicio || !filtroFim) return data;
      const inicio = new Date(filtroInicio);
      const fim = new Date(filtroFim);
      return data.filter((item) => {
        const data = new Date(item.data);
        return data >= inicio && data <= fim;
      });
    };

    const results = filtrarDados();

    setDadosFiltrados(results);
  }, [filtroInicio, filtroFim]);

  useEffect(() => {
    const energia = dadosFiltrados.reduce(
      (acc, curr) => acc + curr.energiaGerada,
      0
    );
    const residuos = dadosFiltrados.reduce(
      (acc, curr) => acc + curr.residuosProcessados,
      0
    );
    const carbono = dadosFiltrados.reduce(
      (acc, curr) => acc + curr.emissaoEvitada,
      0
    );

    setTotalEnergia(energia);
    setTotalResiduos(residuos);
    setTotalCarbono(carbono);
  }, [dadosFiltrados]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relatorios-page">
      {/* <header className="header">
         <h1>Relatórios</h1>
        <div className="filters">
          <button onClick={() => setFilter('daily')} className={filter === 'daily' ? 'active' : ''}>Diário</button>
          <button onClick={() => setFilter('weekly')} className={filter === 'weekly' ? 'active' : ''}>Semanal</button>
          <button onClick={() => setFilter('monthly')} className={filter === 'monthly' ? 'active' : ''}>Mensal</button>
        </div>
      </header> */}

      <main className="main-content">
        {/* <section className="chart-section">
          <h2>Desempenho</h2>
          {/* <ResponsiveContainer width="100%" height={300}>*/}
        {/*  <LineChart data={chartData}>*/}
        {/*    <Line type="monotone" dataKey="energy" stroke="#2d8c3b" strokeWidth={2} name="Energia Gerada" />*/}
        {/*    <Line type="monotone" dataKey="carbon" stroke="#1f5635" strokeWidth={2} name="Carbono Evitado" />*/}
        {/*    <Tooltip />*/}
        {/*    <Legend />*/}
        {/*  </LineChart>*/}
        {/*</ResponsiveContainer>
        </section> */}

        <section className="filtroTempo">
          <h2>Filtrar por período</h2>
          <div className="group-input">
            <div className="input-wrapper">
              <label htmlFor="data-inicio">Data Início:</label>
              <input
                type="date"
                id="data-inicio"
                value={filtroInicio}
                onChange={(e) => setFiltroInicio(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="data-fim">Data Fim:</label>
              <input
                type="date"
                id="data-fim"
                value={filtroFim}
                onChange={(e) => setFiltroFim(e.target.value)}
              />
            </div>
            <button onClick={() => setFiltroInicio("") && setFiltroFim("")}>
              Limpar Filtro
            </button>
          </div>
        </section>

        <section className="table-section">
          {/* <h2>Detalhes</h2> */}
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
              {dadosFiltrados.map((row) => (
                <tr key={row.id}>
                  <td>
                    {new Date(row.data).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td>{row.residuosProcessados} kg</td>
                  <td>{row.energiaGerada} kWh</td>
                  <td>{row.emissaoEvitada} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="analise-dados">
          <h2>Analíse dos dados</h2>
          <div className="cards">
            <div className="card">
              <h3>Resíduos Processados</h3>
              <p>{totalResiduos.toFixed(2)} kg</p>
            </div>
            <div className="card">
              <h3>Energia Gerada</h3>
              <p>{totalEnergia.toFixed(2)} kWh</p>
            </div>
            <div className="card">
              <h3>Carbono Evitado</h3>
              <p>{totalCarbono.toFixed(2)} kg</p>
            </div>
          </div>
          <div className="wrapper-button">
            <button onClick={handlePrint}>Exportar Relatório</button>
          </div>
        </section>
      </main>

      {/* <footer className="footer">
        <button>Exportar Relatório</button>
      </footer> */}
    </div>
  );
};

export default Relatorio;
