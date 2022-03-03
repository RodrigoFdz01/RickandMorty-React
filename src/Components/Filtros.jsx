//import React, { useEffect, useState } from "react";
//import { todosPersonajes } from "../Functions/Functions";
import "../style/Filtros.css";

const Filtros = () => {
  return (
    <div>
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
          /* onChange={}
            value={}}*/
          >
            <option value="" className="">
              Specie
            </option>
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
