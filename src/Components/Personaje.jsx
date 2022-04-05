import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { unicoPersonaje } from "../Functions/Functions";

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
        <div>
          <h2>Character ID: Number {params.id}</h2>
          <p>Name: {personaje.name}</p>
          <p>Specie: {personaje.species}</p>
          <p>Origin: {personaje.origin.name}</p>
          <p>Status: {personaje.status}</p>
          <img src={personaje.image} alt="" />
        </div>
      ) : (
        "no hay personaje"
      )}
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </>
  );
};

export default Personaje;
