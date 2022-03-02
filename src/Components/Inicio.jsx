import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../Functions/Functions";

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
              <a href={`personaje/${personaje.id}`}>{personaje.name} </a>
            </div>
          ))
        : "no hay lista de personajes"}
    </>
  );
};

export default Inicio;
