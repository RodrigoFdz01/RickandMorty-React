import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../Functions/Functions";
import style from "../style/Personaje.module.css";
import { Link } from "react-router-dom";

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);

  const params = useParams();
  console.log(personaje);
  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje);
  }, []);

  return (
    <>
      <div className={style.container}>
        {personaje != null ? (
          <div className={style.wraper}>
            <p className={style.name}>{personaje.name}</p>
            <p>
              <span className={style.subt}>Specie: </span>
              {personaje.species}
            </p>
            <p>
              <span className={style.subt}>Origin: </span>
              {personaje.origin.name}
            </p>
            <p>
              <span className={style.subt}>Status: </span>
              {personaje.status}
            </p>
            <p>
              <span className={style.subt}>Gender: </span>
              {personaje.gender}
            </p>
            <img src={personaje.image} alt="" />
            <Link to={`/Inicio/`}>
              <div>
                <button className={style.button}>Back</button>
              </div>
            </Link>
          </div>
        ) : (
          "No hay personaje"
        )}
      </div>
    </>
  );
};

export default Personaje;
