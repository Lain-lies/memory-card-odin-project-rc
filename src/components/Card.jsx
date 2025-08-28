import { useState, useEffect } from "react";
import "./styles.css";

export function Card({ name, handleClick }) {
  const [imageUrl, setImageUrl] = useState("");

  async function fetchImageUrl() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const pokemon = await response.json();
    const url = pokemon.sprites.other["official-artwork"].front_shiny;
    setImageUrl(url);
  }
  useEffect(() => {
    fetchImageUrl();
    return;
  }, []);

  return (
    <div className="card" onClick={() => handleClick(name)}>
      {imageUrl !== "" && <img src={imageUrl} className="card-img" />}
      <p className="card-name">{name}</p>
    </div>
  );
}
