import axios from "axios";

const todosPersonajes = async () => {
  const peticion = await axios.get("https://rickandmortyapi.com/api/character");
  console.log(peticion.data.results);
};

const unicoPersonaje = async (id, state) => {
  const peticion = await axios.get(
    "https://rickandmortyapi.com/api/character" + { id }
  );
  console.log(peticion.data);
};
export default { todosPersonajes, unicoPersonaje };
