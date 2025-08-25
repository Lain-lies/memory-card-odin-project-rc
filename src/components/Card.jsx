import { useState, useEffect } from "react";

export function Card({ name }) {
  // const [imageRetrieved, setImageRetrieved] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  async function fetchImageUrl() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/clefairy/");
    const pokemon = await response.json();
    const url = pokemon.sprites.other["official-artwork"].front_shiny;
    setImageUrl(url);
  }
  useEffect(() => {
    fetchImageUrl();
    return;
  }, []);

  return (
    <div className="card">
      <h1>{name}</h1>
      {imageUrl !== "" && <img src={imageUrl} />}
    </div>
  );
}
