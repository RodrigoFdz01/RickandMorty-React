import React, { useState, useEffect } from "react";
import { todosPersonajes } from "../Functions/Functions";
import style from "../style/Inicio.module.css";
import Filtro from "./Filtros";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  return (
    <div className={style.card}>
      <Filtro />
      {personajes != null
        ? personajes.map((personaje) => (
            <div key={personaje.id}>
              <img className={style.foto} src={personaje.image} alt="" />
              <a className={style.name} href={`personaje/${personaje.id}`}>
                {personaje.name}{" "}
              </a>
            </div>
          ))
        : "no hay lista de personajes"}
    </div>
  );
};

export default Inicio;
