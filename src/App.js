import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio";
import Filtros from "./Components/Filtros";
import Personaje from "./Components/Personaje";

//import { todosPersonajes } from "../Functions/Functions";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/Inicio" element={<Inicio />}></Route>
          <Route path="/Filtros" element={<Filtros />}></Route>
          <Route path="/personaje/:id" element={<Personaje />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
