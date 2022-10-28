import { useNavigate } from "react-router-dom";



export function Card({movie})  {
    

    const navigate = useNavigate()
    
    function saveID() {
        localStorage.setItem('id', movie.imdbID ) 
    }
    

    return (
        <>
        <div onClick={() => {navigate('./details'); saveID()}} >
            <img src={movie.Poster}/>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            
        </div>
        </>
    )
}







