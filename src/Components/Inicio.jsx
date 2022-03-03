import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../Functions/Functions";
import "../style/Inicio.css";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);
  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);
  return (
    <>
      <div className="listname">
        {personajes != null
          ? personajes.map((personaje) => (
              <div key={personaje.id}>
                <a href={`personaje/${personaje.id}`}>{personaje.name} </a>
                <img className="foto" src={personaje.image} alt="" />
              </div>
            ))
          : "no hay lista de personajes"}
      </div>
    </>
  );
};

export default Inicio;
