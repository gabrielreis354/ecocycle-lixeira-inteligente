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
    <div>
      <h2 className="title">Nossa Equipe</h2>
      <div className="cards">
        {EquipeInfo.map((pessoa, index) => {
          return (
            <Card key={index} urlFoto={pessoa.imagem} altNome={pessoa.nome}>
              <h3>{pessoa.nome}</h3>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
