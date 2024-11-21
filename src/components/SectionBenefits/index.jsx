import "./index.scss";

function SectionBenefits() {
  return (
    <div className="section-benefits">
      <div className="section-heading">
        <div className="section-heading-left">
          <div className="section-heading-text">
            Solução
            <span></span>
          </div>
          <div className="section-heading-title">03 modulos</div>
        </div>

        <div className="section-heading-right">
          <div className="section-heading-description">
            Nosso sistema de 3 módulos utiliza tecnologia inovadora para 
            reaproveitar resíduos domésticos, transformando-os em energia 
            sustentável. Simplificamos o processo, ajudando você a fazer 
            a diferença."
          </div>
        </div>
      </div>

      <div className="section-cards-modules">
        <div className="modules">
          <div className="module">
            <div className="card-module">
              <div className="card-module-inner">
                <div className="card-title">Modulo 01</div>
                <div className="about-module">
                  A lixeira inteligente da EcoCycle facilita o descarte
                  consciente ao identificar automaticamente o tipo de material
                  descartado, separando resíduos comuns de orgânicos. Essa
                  funcionalidade reduz erros na separação e otimiza o
                  reaproveitamento dos materiais.
                </div>
              </div>
            </div>
          </div>
          <div className="module">
            <div className="card-module">
              <div className="card-module-inner" id="second-module">
                <div className="card-title">Modulo 02</div>
                <div className="about-module">
                  Converte resíduos orgânicos em biogás. Ele reduz o volume de
                  lixo destinado a aterros sanitários, evitando a emissão de
                  gases poluentes como o metano. O biogás gerado pode ser
                  utilizado para atividades domésticas como cozinhar ou aquecer
                  água, fechando o ciclo de sustentabilidade.
                </div>
              </div>
            </div>
          </div>
          <div className="module">
            <div className="card-module">
              <div className="card-module-inner" id="third-module">
                <div className="card-title">Modulo 03</div>
                <div className="about-module">
                  Transforma o biogás produzido pelo biodigestor em energia
                  elétrica limpa, reduzindo os custos com eletricidade. Assim,
                  mitiga a pegada de carbono e tornando o consumo energético
                  mais sustentável.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBenefits;
