import { DinamicForm } from "./components/DinamicForm";
import { Footer } from "./components/Footer";
import { FormNewCase } from "./components/FormNewCase";
import { Formulario } from "./components/Formulario";
import { Links } from "./components/Links";

export const App = () => {
  return (
    <div className="app-container">

      <Formulario />      
      <Links />
      <Footer />
    </div>
  );
};
