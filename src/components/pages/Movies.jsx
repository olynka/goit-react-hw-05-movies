import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'components/FetchApi';
import { SearchContainer,SearchFormInput,SearchForm,SearchFormBtn  } from './Movies.styled';


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
        <SearchContainer>
            <SearchForm onSubmit={handleSubmit}>
             <SearchFormInput type="text"
                name="query"
                onChange={handleChange}
                autoComplete="off"
                value={inputSearch}
                autoFocus
                placeholder="Enter a movie name"
            
              />
                <SearchFormBtn  type="submit"></SearchFormBtn >
            </SearchForm>
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



        </SearchContainer>
    )

}