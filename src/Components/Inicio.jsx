import React, { useState, useEffect } from "react";
import { todosPersonajes } from "../Functions/Functions";
import style from "../style/Inicio.module.css";
import imagen from "../rickandmorty.png";

const Inicio = () => {
  const [personajes, setPersonajes] = useState([]);

  const [search, setSearch] = useState("");
  //console.log(search);

  function onClick() {
    setSearch("");
  }
  function handleChange(event) {
    setSearch(event.target.value);
    //
  }

  let results = [];

  if (!search) {
    results = personajes;
  } else {
    results = personajes.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  return (
    <>
      <div className={style.containerimage}>
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
        <button className={style.clear} onClick={onClick} type="submit">
          Clear
        </button>
      </div>
      <div className={style.cardcontainer}>
        {results.map((personaje) => (
          <div className={style.card} key={personaje.id}>
            <img className={style.fotocard} src={personaje.image} alt="" />
            <a className={style.name} href={`personaje/${personaje.id}`}>
              {personaje.name}{" "}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Inicio;
