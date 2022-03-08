import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../Functions/Functions";
import style from "../style/Inicio.module.css";
import Card from "./Card";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);
  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);
  return (
    <div className={style.grid}>
      <Card />
    </div>
  );
};

export default Inicio;

/*
<div className={styles.gridcard}>
     <div className={styles.gridcard}>
      <Card />
    </div>
    </div>
*/
