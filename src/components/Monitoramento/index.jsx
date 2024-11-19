import './index.scss';

const MonitorHome = () => {
  // Dados dos cards
  const cards = [
    {number: '15 kg', text: 'Resíduos Processados Hoje'},
    {number: '12.5 kWh', text: 'Energia Gerada'},
    {number: '2 kg', text: 'Carbono Evitado'},
    {number: '8', text: 'Relatórios Gerados'},
  ];

  return (
    <div className="monitoramento">
      <div className="cards">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="number">{card.number}</div>
            <div className="text">{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitorHome;