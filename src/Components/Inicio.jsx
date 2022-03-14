import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../Functions/Functions.js";
import style from "../style/Inicio.module.css";
import { Link } from "react-router-dom";

import Filtros from "./Filtros.jsx";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);
  return (
    <>
      <Filtros />

      <div className={style.grid}>
        {personajes != null
          ? personajes.map((personaje) => (
              <div className={style.card} key={personaje.id}>
                <Link to={`/personaje/${personaje.id}`}>
                  <img className={style.picture} src={personaje.image} alt="" />
                </Link>
                <p className={style.name}>{personaje.name}</p>
              </div>
            ))
          : "no hay info"}
      </div>
    </>
  );
};

export default Inicio;
