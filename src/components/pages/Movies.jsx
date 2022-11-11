import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'components/FetchApi';


export const Movies = () => { 
const [movieList, setmovieList] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";
    const [inputSearch, setInputSearch] = useState(query);
    const location = useLocation();


       useEffect(() => {
    if (query.trim() === '') {
      return;
    }
     getSearchMovie(query).then(setmovieList);
  }, [query, setSearchParams]);


    const handleSubmit = e => {
       e.target.reset();
    e.preventDefault();
    
        setSearchParams({ query: e.target.query.value });
        
        
     
    };
    
      const handleChange = e => {
    setInputSearch(e.target.value);
  };
     
    return (
        <div>
            <form onSubmit={handleSubmit}>
             <input type="text"
                name="query"
                onChange={handleChange}
                autoComplete="off"
                value={inputSearch}
                autoFocus
                placeholder="Enter a movie name"
            
              />
                <button type="submit">Search</button>
            </form>
              <>
      {movieList && (
        <ul>
          {movieList.map(({ id, title }) => {
            return (
              <li key={id}>
                    <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>



        </div>
    )

}