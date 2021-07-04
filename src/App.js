import React, { useEffect, useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);

  useEffect(() => {
    if (name.length > 0) {
      const filtered = pokemons.filter((poke) => poke.name === name.trim());
      setPokemonsFiltered(filtered);
    }
  }, [name]);

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="cards">
        {pokemonsFiltered.length > 0 &&
          pokemonsFiltered.map((poke) => (
            <CardItem key={poke.name} name={poke.name} sprite={poke.sprite} />
          ))}
      </div>
    </div>
  );
}
