/* eslint-disable react/prop-types */
import "./index.scss";

const MonitorHome = ({ data }) => {
  const ultimoRegistro = data[data.length - 1];

  const transformStringtoDate = (date) => {
    console.log(date)
    const data = new Date(date + 'T00:00').toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      formatMatcher: "best fit"
    })
    return data;
  };

  // Dados dos cards
  const cards = [
    { number: "7kg", text: "♻️ Resíduos sendo processados" },
    { number: "4.75 kWh", text: "💡 Energia Prevista" },
    { number: "2 kg", text: "🌍 Carbono a ser Evitado" },
    { number: "45%", text: "Capacidade de Armazenamento" },
  ];

  return (
    <div className="monitoramento">
      <section>
        <h2>Dados Gerais</h2>
        <div className="cards">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="number">{card.number}</div>
              <div className="text">{card.text}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Último Registro</h2>
        <div className="last-register card">
          <div className="date">
            <h3>{transformStringtoDate(ultimoRegistro.data)}</h3>
          </div>
          <div className="data-info">
            <div>
              <strong>Resíduos Processados:</strong>{" "}
              {ultimoRegistro.residuosProcessados} kg
            </div>
            <div>
              <strong>Energia Gerada:</strong> {ultimoRegistro.energiaGerada}{" "}
              kWh
            </div>
            <div>
              <strong>Carbono Evitado:</strong> {ultimoRegistro.emissaoEvitada}{" "}
              kg
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Gráficos</h2>
        <div className="graficos">

        </div>
      </section>
    </div>
  );
};

export default MonitorHome;
