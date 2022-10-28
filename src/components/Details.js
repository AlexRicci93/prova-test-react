import { useEffect, useState } from "react"


export function Details() {

    const [data, setData] = useState({})

    async function fetchDetails() {

        const response = await fetch(`https://www.omdbapi.com?i=${localStorage.getItem('id')}&apikey=42f82aeb`)
        const json = await response.json()
        
        setData({
            poster: json.Poster,
            title: json.Title,
            year: json.Year,
            runtime: json.Runtime,
            director: json.Director,
            genre: json.Genre,
        })
    }


    useEffect( () => {
        fetchDetails()
        return localStorage.removeItem('id')
    }, [])
    
return(
    <>
    <div >
        <img src={data.poster} />
        <h2>Title: {data.title}</h2>
        <h2>Year: {data.year}</h2>
        <h2>Runtime: {data.runtime}</h2>
        <h2>Director: {data.director}</h2>
        <h2>Genre: {data.genre}</h2>
    </div>
    </>
)

}