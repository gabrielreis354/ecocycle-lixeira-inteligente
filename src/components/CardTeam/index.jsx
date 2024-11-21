import "./index.scss";


export default function CardTeam({ urlFoto, altNome, children }) {
  return (
    <div className="card-team" id={urlFoto}>
      <div className="name">{children}</div>
      <img className="image" src={`/images/${urlFoto}.png`} alt={altNome} />
    </div>
  );
}
