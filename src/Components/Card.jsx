import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../Functions/Functions";
import style from "../style/Card.module.css";
//import { Link } from "react-router-dom";

const Card = () => {
  const [personajes, setPersonajes] = useState(null);
  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);
  return (
    <div className={style.card}>
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

export default Card;
/*
<div className={style.card}>
      <img className={style.foto} src={todosPersonajes.image} alt="" />
      <Link to={`/personaje/${todosPersonajes.id}`}>
        <p className={style.name}>{todosPersonajes.name}</p>
      </Link>
    </div>
*/
