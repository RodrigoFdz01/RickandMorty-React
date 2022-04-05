import React, { useState } from "react";
import { todosPersonajes } from "../Functions/Functions";
import imagen from "../rickandmorty.png";
import style from "../style/Filtros.module.css";

const Filtros = ({ props }) => {
  const [search, setSearch] = useState("");
  // const [clear, setClear] = useState("");

  function onClick() {
    setSearch("");
  }
  function handleChange(event) {
    setSearch(console.log(event.target.value));
  }

  return (
    <div>
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
    </div>
  );
};

export default Filtros;
