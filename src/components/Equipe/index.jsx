import Card from "../Card";
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
          Solução
          <span></span>
        </div>
        <div className='section-heading-title'>
          Nosso time
        </div>

        <div className='section-heading-description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed quas magni optio maxime, architecto laborum et aut nemo harum, aspernatur aperiam delectus incidunt natus laboriosam consequatur doloribus unde? Optio.
        </div>
      </div>

      <div className="team-cards">
        {EquipeInfo.map((pessoa, index) => {
          return (
            <Card key={index} urlFoto={pessoa.imagem} altNome={pessoa.nome}>
              <h3>{pessoa.nome}</h3>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
