import './index.scss'
import { useState } from 'react'
import SvgArrow from '../../components/SvgArrow'
import SvgLock from '../../components/SvgLock'
import SvgSearch from '../../components/SvgSearch'
import SvgShield from '../../components/SvgShield'


import FrameNotice from '../../components/FrameNotice'
import Equipe from "../../components/Equipe"
import FaleConosco from "../../components/FaleConosco"

function Home() {
  const [selectedProduct, setSelectedProduct] = useState("bin");

  function handleChangeProduct(e) {
    setSelectedProduct(e.target.value);
  }

  const productsInfo = {
    bin: {
      path: "url(/images/bin.png)",
      label: "Lixeira inteligente IOT",
      top: "250px",
      left: "365px",
    },
    generator: {
      path: "url(/images/generator.png)",
      label: "Gerador elétrico à biogás",
      top: "280px",
      left: "375px",
    },
    biodigester: {
      path: "url(/images/biodigester.png)",
      label: "Biodigestor inteligente residencial",
      top: "280px",
      left: "365px",
    },
  };

  return (
    <div className="home">
      <div className='home-hero'>
        <div className='home-hero-inner'>

          <div className='hero-headline'>
            <h1 className='hero-headline-title'>
              EcoCycle: <span>menos</span> desperdício <span>mais</span> energia.
            </h1>
            <p className="hero-headline-subtitle">
              Converta resíduos orgânicos domésticos em energia elétrica
              sustentável e renovável.
            </p>
            <button className="hero-headline-button">
              <span className="button-icon">
                <SvgArrow />
              </span>
              <div className='button-text'>
                Conhecer
              </div>
            </button>
          </div>
      
          <div className='hero-object'>
            <div className='hero-object-form'>
              <form>
                <label className={selectedProduct == "bin" ? "checked" : ""}>
                  <input
                    title="bin"
                    type="radio"
                    name="product"
                    value="bin"
                    checked={selectedProduct === "bin"}
                    onChange={handleChangeProduct}
                  />
                </label>
                <label
                  className={selectedProduct == "generator" ? "checked" : ""}
                >
                  <input
                    title="generator"
                    type="radio"
                    name="product"
                    value="generator"
                    checked={selectedProduct === "generator"}
                    onChange={handleChangeProduct}
                  />
                </label>
                <label
                  className={selectedProduct == "biodigester" ? "checked" : ""}
                >
                  <input
                    title="biodigester"
                    type="radio"
                    name="product"
                    value="biodigester"
                    checked={selectedProduct === "biodigester"}
                    onChange={handleChangeProduct}
                  />
                </label>
              </form>
            </div>
            <div className='hero-object-product'>
              <div className='product-img' style={
                {
                  backgroundImage: productsInfo[selectedProduct].path
                }
                }>
              </div>
              <div className='product-bubbles'>
                <div className='product-bubble'></div>
                <div className='product-bubble'></div>
              </div>
            </div>

            <div className="object-labels">
              <div
                className="object-label"
                style={{
                  top: productsInfo[selectedProduct].top,
                  left: productsInfo[selectedProduct].left
                }}>
                <div className='object-label-inner'>
                  <div className='circle-outside'>
                    <div className='circle-inside'></div>
                  </div>
                  <div className="line">
                    <div className="line-horizontal"></div>
                    <div className="line-vertical"></div>
                  </div>
                </div>
                <div className='object-label-text'>
                  {productsInfo[selectedProduct].label}
                </div>
              </div>
            </div>
          </div>

          <div className="hero-grid">
            <div className="grid-square">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className="grid-squares-little">
                <div className="grid-square-little"> </div>
                <div className="grid-square-little"> </div>
                <div className="grid-square-little"> </div>
                <div className="grid-square-little"> </div>
                <div className="grid-square-little"> </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='section'>

        <div className='section-content'>
          <div className='section-notice'>
            <div className='section-heading'>
              Um heading para uma seção, e é isso.
            </div>
            <div className='section-item'>
              <div className='frame'>
                <div className='frame-top'>
                  <div className='frame-bar'>
                    <span className='icon-shield'>
                      <SvgShield/>
                    </span>
                    <div className='frame-url'>
                      <span className='icon-lock'>
                        <SvgLock/>
                      </span>
                      <span className='url'>
                        https://google.com
                      </span>
                    </div>
                    <span className='icon-search'>
                      <SvgSearch/>
                    </span>
                  </div>
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
                          Brasil reaproveita apenas 4% dos resíduos sólidos produzidos.
                        </div>
                        <div className='notice-head-font'>
                          Fonte: Gazeta do povo
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
