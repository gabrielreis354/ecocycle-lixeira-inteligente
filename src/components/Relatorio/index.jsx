/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./index.scss";

const Relatorio = ({data}) => {
  const [filtroInicio, setFiltroInicio] = useState("");
  const [filtroFim, setFiltroFim] = useState("");

  const [dadosFiltrados, setDadosFiltrados] = useState(data);

  const [totalEnergia, setTotalEnergia] = useState(0);
  const [totalResiduos, setTotalResiduos] = useState(0);
  const [totalCarbono, setTotalCarbono] = useState(0);

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
  }, [filtroInicio, filtroFim, data]);

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

  const handleLimpar = () => {
    setFiltroInicio("");
    setFiltroFim("");
  }

  return (
    <div className="relatorios-page">

      <main className="main-content">

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
            <button onClick={handleLimpar}>
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
                      timeZone: "UTC",
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
    </div>
  );
};

export default Relatorio;
