//import React, { useEffect, useState } from "react";
//import { todosPersonajes } from "../Functions/Functions";
import "../style/Filtros.css";
import imagen from "../rickandmorty.png";

const Filtros = () => {
  return (
    <div>
      <div className="picture">
        <img src={imagen} className="image" alt="imagen" />
      </div>
      <form className="navfilter">
        <input
          className="inputText"
          type="text"
          placeholder="Write your character"
          /* onChange={}
          value={}*/
        />
        <div>
          <select
            className="selectSpecie"
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
      </form>
    </div>
  );
};

export default Filtros;
