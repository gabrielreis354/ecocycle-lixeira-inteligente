import './index.scss'
import SvgG1 from '../SvgG1'
import SvgSearch from '../SvgSearch'

function FrameNotice () {
  return (
    <div class="item_news">
      <div class="item_news_content">
          <div class="news_header">
              <div class="news_logo">
                <SvgG1/>
              </div>

              <div class="news_tag">
                  Meio ambiente
              </div>

              <div class="news_icon">
                <SvgSearch/>
              </div>

          </div>
          <div class="news_headline">
              <div class="news_title">
                  Poluição plástica afeta <span>88% das espécies marinhas</span>, diz WWF
              </div>
              <div class="news_subtitle">
                  Em relatório, entidade ambientalista aponta que material atingiu "todas as partes do oceano" e exige a criação de um tratado internacional sobre dejetos plásticos.
              </div>
          </div>
      </div>
  </div>
  )
}


export default FrameNotice