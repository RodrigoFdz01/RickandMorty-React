//import React, { useEffect, useState } from "react";
//import { todosPersonajes } from "../Functions/Functions";
import imagen from "../rickandmorty.png";
import style from "../style/Filtros.module.css";

const Filtros = () => {
  return (
    <div>
      <div className={style.picture}>
        <img src={imagen} className={style.image} alt="imagen" />
      </div>
      <form className={style.navfilter}>
        <input
          className={style.inputText}
          type="text"
          placeholder="Write your character"
          /* onChange={}
          value={}*/
        />
        <div>
          <select
            className={style.selectSpecie}
            /* onChange={}
            value={}}*/
          >
            <option value="">Specie</option>
            <option value="">All</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Humanoid">Humanoid</option>
          </select>
        </div>
        <div>
          <select
            className={style.selectStatus}
            /* onChange={}
            value={}}*/
          >
            <option value="">Status</option>
            <option value="">All</option>
            <option value="Human">Alive</option>
            <option value="Alien">Death</option>
            <option value="Humanoid">Unknow</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
