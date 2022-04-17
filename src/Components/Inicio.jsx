import React, { useState, useEffect } from "react";
import { todosPersonajes } from "../Functions/Functions";
import style from "../style/Inicio.module.css";
import imagen from "../rickandmorty.png";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);
  const [search, setSearch] = useState("");
  //console.log(search);

  function onClick() {
    setSearch("");
  }
  function handleChange(event) {
    setSearch(event.target.value);
    console.log(search);
  }
  /*personajes.filter((search) =>
        search.name.toLowercase().includes(search.toLowercase())
        */

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  return (
    <>
      <div className={style.picture}>
        <img src={imagen} className={style.image} alt="imagen" />
      </div>
      <div className={style.navfilter}>
        <input
          className={style.inputText}
          type="text"
          placeholder="Write your character"
          value={search}
          onChange={handleChange}
        />
        <button onClick={onClick} type="submit">
          Clear
        </button>
      </div>
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
          : "ddddd"}
      </div>
    </>
  );
};

export default Inicio;
