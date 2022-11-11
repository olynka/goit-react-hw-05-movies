import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "./FetchApi";


export const MovieList = () => { 
    const [movieList, setMovieList] = useState([]);
      
    useEffect(() => {
        getMovies().then(setMovieList);
    }, []);



    return (
        <>
           {movieList && (
                <ul>
                {movieList.map(({ id, title }) => {
                    return (
                    <li key={id}>
                        <Link to={`${id}`}>{title}</Link>
                    </li>
                    )
                }
                )
                }
            </ul>
            )}
        </>
    )
}