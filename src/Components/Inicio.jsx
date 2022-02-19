import React, { useEffect, useState } from "react";
import { todosPersonajes } from "./Funciones/Funciones.js";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);
  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);
  return (
    <>
      {personajes != null
        ? personajes.map((personaje) => (
            <div key={personaje.id}>
              <a href="# ">{personaje.name} </a>
              <a href={`personaje/${personaje.id}`}>{personaje.name} </a>
              <img src={personaje.image} alt="" />
            </div>
          ))
        : "no hay info"}
    </>
  );
};

export default Inicio;
