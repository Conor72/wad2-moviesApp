import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'
                                                              
const PopularMoviesPage = () => {
  const context = useContext(MoviesContext);
  const popular = context.popular.filter((m) => {  
    return !("watchlist" in m);
  });

  return (
      <PageTemplate 
        title='No. Movies'
        movies={popular}  
        action={(movie) => {
          return <AddToWatchListButton movie={movie} />    
        }}
      />
  );
};

export default PopularMoviesPage;