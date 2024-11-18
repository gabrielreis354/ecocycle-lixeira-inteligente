/* eslint-disable react/prop-types */
import "./Card.scss";
export default function Card({ urlFoto, altNome, children }) {
  return (
    <div className="card" id={urlFoto}>
      <img className="image" src={`/images/${urlFoto}.png`} alt={altNome} />
      {children}
    </div>
  );
}
