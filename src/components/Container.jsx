import { useState } from "react";
import { PokemonList } from "./data";
import { Card } from "./Card";

export function Container(){

    const [pokemonList, setPokemonList] = useState([...PokemonList]);

    const [chosenPokemons, setChosenPokemons] = useState([]);

    //temporary
    const score = chosenPokemons.length;

    function shuffle(){
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        const randomizedPositions = [];
        
        while(numbers.length !== 0){
            const max = numbers.length - 1;
            const index = Math.floor(Math.random() * max);
            const chosen = numbers[index];
            randomizedPositions.push(chosen);
            numbers = numbers.filter(number => number !== chosen);
        }

        const newPokemonList = [];
        
        for(let i = 0; i < randomizedPositions.length; i++){
            const index = randomizedPositions[i]
            const pokemon = pokemonList[index];
            newPokemonList.push({...pokemon});
        }
        
        setPokemonList([...newPokemonList]);
        
    }

    function onClick(name){
        if(chosenPokemons.includes(name)){
            //update score from header component
            setChosenPokemons([]);
        }else{
            setChosenPokemons([...chosenPokemons, name]);
        }


        // shuffle();

    }

    return(
        <div className = 'container'>
            {pokemonList.map(pokemon => <Card key = {pokemon.id} name = {pokemon.name} handleClick = {onClick} />)}
            <h1>{score}</h1>
        </div>
    )
}