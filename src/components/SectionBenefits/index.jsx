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
          <div className="section-heading-title">Conheça os módulos!</div>
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
              <div className="card-module-inner" >
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
                  Este módulo é o biodigestor que converte os resíduos orgânicos captados pela lixeira inteligente em biogás. 
                  O biogás produzido, composto majoritariamente de metano (CH₄), é capturado 
                  e armazenado para ser utilizado no próximo módulo: o gerador de eletricidade.
                </div>
              </div>
            </div>
          </div>
          <div className="module">
            <div className="card-module">
              <div className="card-module-inner" id="third-module">
                <div className="card-title">Modulo 03</div>
                <div className="about-module">
                  O último módulo é o gerador, o qual transforma o biogás produzido pelo biodigestor em energia
                  elétrica limpa, reduzindo os custos com eletricidade. Assim,
                  mitiga a pegada de carbono e tornando o consumo energético
                  mais sustentável!
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
