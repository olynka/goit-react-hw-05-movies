import { Route, Routes,Navigate} from "react-router-dom";

import { Movies } from "./pages/Movies";
import { Home } from "./pages/Home";
import MovieDetalies from "./pages/MovieDetails";
import Cast from "./Cast/Cast";
import Review from "./Review/Review";
import { Layout } from "./pages/Layout";





export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Navigate to="home" />} />
          <Route path='home' element={<Home/>}/>
          <Route path='home/:movieId' element={<MovieDetalies />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Review/>}/>
          </Route>

          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetalies />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Review/>}/>
          </Route>
          {/* <Route path='*' element={<NotFound />} /> */}
        </Route>
      </Routes>
       
       </div>
  );
};
