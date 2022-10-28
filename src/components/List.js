import React from "react";
import { useState } from "react";
import { Card } from "./Card";


export function List() {

    
    const [searchInput, setSearchInput] = useState("")
    const [ movies, setMovies ] = useState([])
    
    function handleInputChange(event)  {

        const value = event.target.value
        setSearchInput(value)
    }

    async function fetchFilm() {

        const response = await fetch(`https://www.omdbapi.com/?s=${searchInput}&apikey=42f82aeb`)
        const json = await response.json()
        setMovies([...json.Search])


    
    }


    
    return (
        <>

        <div style={{backgroundColor:'aquablue', border: '2px solid blue' }}>
            <input value={searchInput} onChange={handleInputChange}/>
            <button onClick={fetchFilm}>CERCA FILM</button>
        </div>

        <div>
            {movies.map((movie) => <Card movie={movie} id={movie.imdbID}/>)}
        </div>
        </>
    )
}