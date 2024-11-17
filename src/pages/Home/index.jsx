import Equipe from "../../components/Equipe";
import FaleConosco from "../../components/FaleConosco";
import "./Home.scss";
export default function Home() {
  return (
    <div className="container">
      <h1>Banner Hero</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <FaleConosco />
      <Equipe />
    </div>
  );
}
