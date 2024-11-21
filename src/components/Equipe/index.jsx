import CardTeam from "../CardTeam";
import "./Equipe.scss";
const EquipeInfo = [
  {
    nome: "Eduardo Bialas",
    imagem: "bialas",
  },
  {
    nome: "Gabriel Reis",
    imagem: "gabriel",
  },
  {
    nome: "Guilherme Lopes",
    imagem: "gui",
  },
  {
    nome: "Higor Alves",
    imagem: "higor",
  },
  {
    nome: "Luiz Gustavo",
    imagem: "luiz",
  },
];

export default function Equipe() {
  return (
    <div className="section-teams">
      <div className='section-heading'>
        <div className='section-heading-text'>
          Equipe
          <span></span>
        </div>
        <div className='section-heading-title'>
          Nosso time
        </div>

        <div className='section-heading-description'>
         Conheça as pessoas por trás da EcoCycle. 
        </div>
      </div>

      <div className="team-cards">
        {EquipeInfo.map((pessoa, index) => {
          return (
            <CardTeam key={index} urlFoto={pessoa.imagem} altNome={pessoa.nome}>
              <h3>{pessoa.nome}</h3>
            </CardTeam>
          )
        })}
      </div>
    </div>
  );
}
