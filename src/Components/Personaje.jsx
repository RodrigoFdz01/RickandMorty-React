import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../Functions/Functions";
import style from "../style/Personaje.module.css";

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);

  const params = useParams();
  console.log(personaje);
  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje);
  }, []);

  return (
    <>
      {personaje != null ? (
        <div className={style.container}>
          <p className={style.name}>{personaje.name}</p>
          <p>Specie: {personaje.species}</p>
          <p>Origin: {personaje.origin.name}</p>
          <p>Status: {personaje.status}</p>
          <img src={personaje.image} alt="" />
          <div>
            <button className={style.button}>Back</button>
          </div>
        </div>
      ) : (
        "no hay personaje"
      )}
    </>
  );
};

export default Personaje;
