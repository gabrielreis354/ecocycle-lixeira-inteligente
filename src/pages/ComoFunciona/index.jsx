import { Link } from "react-router-dom";
import "./index.scss";
export default function ComoFunciona() {
  return (
    <div className="funcionamento">
      <h1 className="main-title">
        Como funciona o reaproveitamento de resíduos na EcoCycle?
      </h1>
      <p>
        A EcoCycle transforma o desperdício em oportunidade. Por meio de
        sensores IoT, inteligência artificial e tecnologia sustentável, nosso
        sistema automatiza a separação de resíduos, encaminha os orgânicos para
        o biodigestor e converte esses resíduos em energia limpa e renovável.
        Entenda, etapa por etapa, como a EcoCycle está revolucionando a gestão
        de resíduos em residências e empresas
      </p>

      <section>
        <h2 className="subtitle">1.0 Separação Inteligente de Resíduos</h2>
        <p>
          Nosso sistema começa com uma lixeira inteligente equipada com sensores
          IoT que identificam e classificam automaticamente o tipo de resíduo
          descartado.
        </p>
        <br />
        <p>
          Os resíduos orgânicos, como restos de alimentos, cascas e folhas, são
          separados e direcionados para o compartimento adequado, enquanto
          outros tipos de resíduos seguem para a destinação convencional.
        </p>
      </section>

      <section>
        <h2 className="subtitle">2.0 Separação Inteligente de Resíduos</h2>
        <p>
          Os resíduos orgânicos separados são enviados para o biodigestor
          residencial da EcoCycle. Este equipamento utiliza o processo de
          digestão anaeróbica, no qual bactérias especializadas decompõem os
          resíduos em um ambiente sem oxigênio.
        </p>
        <br />
        <p>
          O resultado? Produção de biogás (metano), uma fonte de energia limpa,
          e biofertilizante, que pode ser usado em hortas e jardins. Tudo isso
          sem odores desagradáveis, graças ao design inovador do biodigestor.
        </p>
      </section>
      <section>
        <h2 className="subtitle">3.0 Conversão e Uso de Energia</h2>
        <p>
          O biogás produzido no biodigestor é convertido em energia elétrica ou
          térmica, dependendo das necessidades do usuário. Essa energia pode ser
          usada para iluminar ambientes, aquecer água ou abastecer equipamentos
          elétricos.
        </p>
        <br />
        <p>
          Além disso, o sistema é monitorado em tempo real pela nossa plataforma
          EcoCycle, que permite ao usuário acompanhar a quantidade de resíduos
          processados, energia gerada e emissões de carbono evitadas.
        </p>
      </section>
      <section>
        <h2 className="subtitle">4.0 Monitoramento em Tempo Real</h2>
        <p>
          Por meio da plataforma EcoCycle Manager, você tem acesso a um painel
          completo com informações detalhadas sobre:
        </p>
        <div>
          <ul>
            <li>Quantidade de resíduos orgânicos processados.</li>
            <li>Energia gerada e economizada.</li>
            <li>Emissões de carbono evitadas.</li>
          </ul>
        </div>
        <br />
        <p>
          A interface intuitiva torna o monitoramento simples e eficiente,
          permitindo que você veja, em tempo real, o impacto positivo da sua
          contribuição para o meio ambiente. Pronto para fazer parte dessa
          revolução sustentável?
        </p>
      </section>

      <div className="link-wrapper">
        <Link to="/dashboard/monitoramento">Conhecer Plataforma</Link>
      </div>
    </div>
  );
}
