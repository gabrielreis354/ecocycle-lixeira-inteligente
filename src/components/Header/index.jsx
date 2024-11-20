import MenuLink from "../MenuLink";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <MenuLink to={'/'}>
          <h1 className="logoTitle">
            <span>Eco</span>
            <span>Cycle</span>
          </h1>
        </MenuLink>
      </div>
      <div className="links">
        <MenuLink to={"/"}>Home</MenuLink>
        <MenuLink to={"/funcionamento"}>Como Funciona</MenuLink>
        <MenuLink to={"/dashboard"}>Dashboard</MenuLink>
      </div>      
    </header>
  );
}
