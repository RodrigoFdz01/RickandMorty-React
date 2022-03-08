//import { todosPersonajes } from "../Functions/Functions";
import style from "../style/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ todosPersonajes }) => {
  return (
    <div className={style.card}>
      <img className={style.foto} src={todosPersonajes.image} alt="" />
      <Link to={`/personaje/${todosPersonajes.id}`}>
        <p className={style.name}>{todosPersonajes.name}</p>
      </Link>
    </div>
  );
};

export default Card;
/*
<div className={style.card}>
      <img className={style.foto} src={todosPersonajes.image} alt="" />
      <Link to={`/personaje/${todosPersonajes.id}`}>
        <p className={style.name}>{todosPersonajes.name}</p>
      </Link>
    </div>
*/
