import './index.scss'
import SvgArrow from '../SvgArrow'
import SvgLock from '../SvgLock'
import SvgSearch from '../SvgSearch'
import SvgShield from '../SvgShield'
import SvgPlus from '../SvgPlus'

function SectionNews () {
  return (
    <div className='section-notice'>
    <div className='section-heading'>
      <div className='section-heading-text'>
        Problema
        <span></span>
      </div>
      <div className='section-heading-title'>
        <span>Alerta Global:</span> desperdício de Recursos Orgânicos Colocam a Sustentabilidade em Risco.
      </div>
      <div className='section-heading-description'>
        O Brasil enfrenta desafios críticos em relação ao desperdício de recursos orgânicos:  
        <span>apenas 4%</span> dos resíduos sólidos são reaproveitados, enquanto o desperdício
        de alimentos coloca o país <span>entre os 10 maiores do mundo</span>. Porém, é evidente
        que o Brasil possui grande potencial para liderar em sustentabilidade.
      </div>
    </div>
    <div className='section-item'>
      <div className='frame'>
        <div className='frame-top'>
          <div className='frame-arrows'>
            <span className='icon-arrow'>
              <SvgArrow/>
            </span>
            <span className='icon-arrow'>
              <SvgArrow/>
            </span>
          </div>
          <div className='frame-bar'>
            <span className='icon-shield'>
              <SvgShield/>
            </span>
            <div className='frame-url'>
              <span className='icon-lock'>
                <SvgLock/>
              </span>
              <span className='url'>
                https://news.com
              </span>
            </div>
            <span className='icon-search'>
              <SvgSearch/>
            </span>
          </div>
          <span className='icon-plus'>
            <SvgPlus/>
          </span>
        </div>

        <div className='frame-main'>
          <div className='frame-main-top'>
            Principais notícias agora
          </div>
          <div className='frame-main-center'>
            <div className='frame-notice'>
              <div className='notice-image'> </div>
              <div className='notice-head'>
                <div className='notice-head-title'>
                  <a target="_blank" href="https://www.gazetadopovo.com.br/gpbc/papo-prsa/brasil-reaproveita-apenas-4-dos-residuos-solidos-produzidos/">
                    Brasil reaproveita <span>apenas 4%</span> dos resíduos sólidos produzidos.
                  </a>
                </div>
                <div className='notice-head-font'>
                  Fonte: Gazeta do povo
                </div>
              </div>
            </div>

            <div className='frame-items'>
              <div className='frame-item'>
                <div className='frame-item-image'></div>
                <div className='frame-item-title'>
                  <a target="_blank" href="https://news.un.org/pt/story/2024/09/1838346">
                    Perda e desperdício de alimentos geram até 10% das emissões globais, alerta ONU
                  </a>
                </div>
              </div>
              <div className='frame-item'>
                <div className='frame-item-image'></div>
                <div className='frame-item-title'>
                  <a target="_blank" href="https://www.cnnbrasil.com.br/nacional/brasil-e-um-dos-10-paises-que-mais-desperdicam-comida-revela-estudo-da-onu/">
                    Brasil é um dos 10 países que mais desperdiçam comida, revela estudo da ONU
                  </a>
                </div>
              </div>
              <div className='frame-item'>
                <div className='frame-item-image'></div>
                <div className='frame-item-title'>
                  <a target="_blank" href="https://jornal.usp.br/campus-ribeirao-preto/serie-energia-geracao-de-energia-atraves-do-biogas-ja-representa-89-da-matriz-eletrica-no-brasil/">
                    Geração de energia através do biomassa já representa 8,9% da matriz elétrica no Brasil
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
  )
}

export default SectionNews