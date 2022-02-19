import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Inicio.jsx";
import Personaje from "./Personajes.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/personaje/:id" element={<Personaje />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
