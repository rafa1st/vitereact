import { useState } from "react";
import { convertCurrency } from "../utils/utils";

export const Formulario = () => {
  const [formulario, setFormulario] = useState([
    {
      nome: "",
      description: "",
      valor: 0,
    },
  ]);

  //funções;

  const handleChange = (event, index) => {
    const data = [...formulario];
    data[index][event.target.name] = event.target.value;
    setFormulario(data);
  };

  const addFormulario = (event) => {
    event.preventDefault();
    const newFormulario = { nome: "", description: "", valor: 0 };
    setFormulario([...formulario, newFormulario]);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const submit = (e) => {
    e.preventDefault();    
    console.log(formulario);    
  };

  //retorno;

  return (
    <div>
      <h1>Hello World</h1>
      <form>
        {formulario.map((input, index) => {
          return (
            <div key={index}>
              <label>
                Nome do Carro:
                <input
                  type="text"
                  value={input.nome}
                  name="nome"
                  onChange={(event) => handleChange(event, index)}
                />
              </label>
              <label>
                Descrição:
                <input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={(event) => handleChange(event, index)}
                />
              </label>
              <label>
                Valor:
                <input
                  type="number"
                  name="valor"
                  value={input.valor}
                  onChange={(event) => handleChange(event, index)}
                />
              </label>
            </div>
          );
        })}
      </form>
      <button onClick={addFormulario}>+ Novo Carro</button>
      <button onClick={submit}>Submit</button>
    </div>
  );
};
