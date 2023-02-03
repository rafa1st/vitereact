import { DinamicForm } from "./components/DinamicForm";
import { Footer } from "./components/Footer";
import { FormNewCase } from "./components/FormNewCase";
import { Formulario } from "./components/Formulario";

export const App = () => {
  return (
    <div className="app-container">
      {/* <DinamicForm /> */}
      <Formulario />      
      <Footer />
    </div>
  );
};
