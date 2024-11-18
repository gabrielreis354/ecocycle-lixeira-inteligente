import Equipe from "../../components/Equipe";
import FaleConosco from "../../components/FaleConosco";
import SectionHero from "../../components/SectionHero";
import "./Home.scss";
export default function Home() {
  return (
    <div className="container">
      <SectionHero />
      <FaleConosco />
      <Equipe />
    </div>
  );
}
