//import React, { useEffect, useState } from "react";
import React from "react";
//import { todosPersonajes } from "../Functions/Functions";
//import style from "../style/Card.module.css";
//import { Link } from "react-router-dom";

const Card = () => {
  /* const [personajes, setPersonajes] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);*/

  return (
    <>
      <h1>Card</h1>
    </>

    /* <div>
      {personajes
        .filter((name) => name.includes(search))
        .map((filteredName) => (
          <div key={filteredName.id}>
            <img className={style.foto} src={filteredName.image} alt="" />
            <a className={style.name} href={`personaje/${filteredName.id}`}>
              {filteredName.name}{" "}
            </a>
          </div>
        ))}
    </div>*/
  );
};
export default Card;

/*
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

<div>
  {personajes.filter(name => name.includes('Estado')).map(filteredName => (
    <div key={filteredName.id}>
              <img className={style.foto} src={filteredName.image} alt="" />
              <a className={style.name} href={`personaje/${filteredName.id}`}>
                {filteredName.name}{" "}
              </a>
            </div>
  ))}
</div>

    || if (inputText === personaje.name.indexOf(inputText)) {
          <h3>{personaje.name}</h3>;
    */
