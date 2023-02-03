import { convertCurrency } from "../../utils/utils";

export const Playground = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <div className="front-card">
        <h4>Descrição:</h4>
        <p>{props.description}</p>
        <span>{convertCurrency(props.valor)}</span>
      </div>
    </div>
  );
};
