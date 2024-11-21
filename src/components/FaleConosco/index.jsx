import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Form.scss";

const schema = yup.object({
  nome: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Digite um email válido!").required("Email é obrigatório"),
  tipo: yup
    .string()
    .required("Tipo é obrigatório")
    .oneOf(["Empresa", "Pessoa Física"]), // Valida se o tipo é Empresa ou Pessoa Física
  mensagem: yup.string().required("Mensagem é obrigatória"),
});

export default function FaleConosco() {
  const [formCliente, setFormCliente] = useState({
    nome: "",
    email: "",
    tipo: "",
    mensagem: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const inserirCliente = (cliente) => {
    setFormCliente(cliente);
    reset();
  };

  useEffect(() => {
    console.log(formCliente)
  }, [formCliente]);

  return (
    <div className="section-contact">
      <div className='section-heading'>
        <div className='section-heading-text'>
          Contato
          <span></span>
        </div>
        <div className='section-heading-title'>
          Fale Conosco!
        </div>
      </div>
      <div className="section-form">

        <form onSubmit={handleSubmit(inserirCliente)}>
          <div className="inputWrapper">
            <label className="inputLabel" htmlFor="nome">
              Nome:
            </label>
            <input
              id="nome"
              className="input"
              type="text"
              placeholder="Coloque seu nome aqui"
              {...register("nome")}
            />
            {errors.nome ? (
              <span className="error">{errors.nome.message}</span>
            ) : null}
          </div>
          <div className="inputWrapper">
            <label className="inputLabel" htmlFor="email">
              Email:
            </label>
            <input
              id="email"
              className="input"
              type="email"
              placeholder="Coloque seu melhor email aqui"
              {...register("email")}
            />
            {errors.email ? (
              <span className="error">{errors.email.message}</span>
            ) : null}
          </div>
          <div className="inputWrapper">
            <label className="inputLabel" htmlFor="tipo">
              Tipo:
            </label>
            <select name="tipo" id="tipo" className="input" {...register("tipo")}>
              <option>Empresa</option>
              <option>Pessoa Física</option>
            </select>
            {errors.tipo ? (
              <span className="error">{errors.tipo.message}</span>
            ) : null}
          </div>
          <div className="inputWrapper">
            <label className="inputLabel" htmlFor="mensagem">
              Mensagem:
            </label>
            <textarea
              className="input"
              name="mensagem"
              id="mensagem"
              cols="30"
              rows="10"
              placeholder="Coloque aqui a sua mensagem"
              {...register("mensagem")}
            ></textarea>
            {errors.mensagem ? (
              <span className="error">{errors.mensagem.message}</span>
            ) : null}
          </div>

          <div className="buttonWrapper">
            <button type="submit">Enviar</button>
          </div>

        </form>
      </div>
    </div>
  );
}
