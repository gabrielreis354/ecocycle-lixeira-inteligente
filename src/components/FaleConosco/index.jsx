import "./Form.scss";
export default function FaleConosco() {
  return (
    <div className={"containerForm"}>
      <h2 className={"title"}>Fale Conosco</h2>

      <div >
        <div className={"inputWrapper"}>
          <label className={"inputLabel"} htmlFor="nome">
            Nome:
          </label>
          <input
            id="nome"
            className={"input"}
            type="text"
            placeholder=""
          />
        </div>
        <div className={"inputWrapper"}>
          <label className={"inputLabel"} htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            className={"input"}
            type="email"
            placeholder=""
          />
        </div>
        <div className={"inputWrapper"}>
          <label className={"inputLabel"} htmlFor="tipo">
            Tipo:
          </label>
          <select name="tipo" id="tipo" className={"input"}>
            <option>Empresa</option>
            <option>Pessoa Física</option>
          </select>
        </div>
        <div className={"inputWrapper"}>
          <label className={"inputLabel"} htmlFor="mensagem">
            Mensagem:
          </label>
          <textarea
            className={"input"}
            name="mensagem"
            id="mensagem"
            cols="30"
            rows="10"            
          ></textarea>
        </div>
      </div>
    </div>
  );
}
