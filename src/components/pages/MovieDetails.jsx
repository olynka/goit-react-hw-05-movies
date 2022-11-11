import { useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { getMovieId } from "components/FetchApi";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import {SingleMovie,MainInfo,ContainerPoster,MoviePoster,ContainerInfo,Section,MovieName,Rating,Title,Text,GenresList,GenresItem } from "./MovieDetalies.styled";


const MovieDetalies = () => { 
       const [movieDetalies, setMovieDetalies] = useState(null);
    const {movieId} = useParams();
    const location = useLocation();

        
    useEffect(() => {
        getMovieId(movieId).then(setMovieDetalies)
    }, [movieId]);

    if (!movieDetalies) {
        return;
    };

    const {
    poster_path,
    original_title,
    vote_average,
    overview,
    release_date,
    genres,
    } = movieDetalies;
    
    const genreList = genres.map((genre) => genre.name).join(' ');
    const slicedDate = release_date.split('').slice(0, 4).join('');
    let movieReleaseDate = `(${slicedDate})`;
     if (release_date === '') {
    return movieReleaseDate = 'Unknown';
    }
    


    return (
      <SingleMovie>
     
             <Link
        to={location.pathname.includes('movies')
            ? `${location.state.from.pathname}${location.state.from.search}`
            : '/home'
        }
      >
        Back
            </Link>
          <MainInfo> 
            <ContainerPoster>
                   <MoviePoster
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${original_title}`}
          
            />
            </ContainerPoster>
          <ContainerInfo>
            <Section>
                    <MovieName>
                        {original_title} {movieReleaseDate} 
                    </MovieName>
                    <Rating>
                        User score: <span>{Math.round(vote_average * 10)}%</span>
              </Rating>
            </Section>
            <Section>
                    <Title>
                              Overview 
                    </Title>
                    <Text>
                          {overview}
              </Text>
            </Section>
            <Section>
                    <Title>
                          Genres
                    </Title>
              < Rating>{genreList}</ Rating>
              </Section>

                </ContainerInfo>



       
        
            </MainInfo>
            <Title>Additional information</ Title>
            <GenresList>
                      <GenresItem>
            <Link to="cast" state={{ from: location.state?.from ?? '' }}> 
            Cast
          </Link>
        </GenresItem>
         <GenresItem>
          <Link to="reviews" state={{ from: location.state?.from ?? '' }}>
            Reviews
          </Link>
                </GenresItem> 
                  <Suspense>
          <Outlet />
        </Suspense>  
            </GenresList>
        </SingleMovie>
        
    
)
    
}
export default MovieDetalies;