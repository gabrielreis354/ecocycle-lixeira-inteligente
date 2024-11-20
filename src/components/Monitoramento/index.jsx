/* eslint-disable react/prop-types */
import "./index.scss";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const MonitorHome = ({ data }) => {
  const ultimoRegistro = data[data.length - 1];

  const transformStringtoDate = (date) => {
    const data = new Date(date + "T00:00").toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      formatMatcher: "best fit",
    });
    return data;
  };

  // Dados dos cards
  const cards = [
    { number: "7kg", text: "♻️ Resíduos sendo processados" },
    { number: "4.75 kWh", text: "💡 Energia Prevista" },
    { number: "2 kg", text: "🌍 Carbono a ser Evitado" },
    { number: "45%", text: "Capacidade de Armazenamento" },
  ];

  // Extraindo dados para o gráfico
  const labels = data.map((item) => transformStringtoDate(item.data)); // Exemplo: ["2024-11-13", "2024-11-14", "2024-11-15"]
  const energiaGerada = data.map((item) => item.energiaGerada); // Exemplo: [1.5, 2.1, 1.8]
  const carbonoEvitado = data.map((item) => item.emissaoEvitada); // Exemplo: [0.3, 0.5, 0.4]

  // Configurando os dados do gráfico
  const dataChart = {
    labels,
    datasets: [
      {
        label: "Energia Gerada (kWh)",
        data: energiaGerada,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Carbono Evitado (kg)",
        data: carbonoEvitado,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Configurando opções do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Relatório de Monitoramento",
      },
    },
  };

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
          <Bar data={dataChart} options={options} />
        </div>
      </section>
    </div>
  );
};

export default MonitorHome;
