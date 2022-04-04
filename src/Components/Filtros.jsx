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

      <form>
        <div className={style.navfilter}>
          <div className={style.inputText}>
            <input
              type="text"
              placeholder="Write your character"
              /*    onChange={}
            value={}*/
            />
          </div>
          <div className={style.selectSpecie}>
            <select
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
          <div className={style.selectStatus}>
            <select
            /*  onChange={}
            value={}}*/
            >
              <option value="">Status</option>
              <option value="">All</option>
              <option value="Human">Alive</option>
              <option value="Alien">Death</option>
              <option value="Humanoid">Unknow</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
