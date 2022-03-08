import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../Functions/Functions.js";
import style from "../style/Inicio.module.css";
import { Link } from "react-router-dom";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);
  return (
    <>
      <div className={style.grid}>
        {personajes != null
          ? personajes.map((personaje) => (
              <Link to={`/personaje/${personaje.id}`}>
                <div className={style.card} key={personaje.id}>
                  <img className={style.picture} src={personaje.image} alt="" />
                  <p className={style.name}>{personaje.name}</p>
                </div>
              </Link>
            ))
          : "no hay info"}
      </div>
    </>
  );
};

export default Inicio;
