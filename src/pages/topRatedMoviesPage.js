import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'
                                                              
const TopRatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const topRated = context.topRated.filter((m) => {    
    return !("watchlist" in m);                             //TODO watchlist button needs to be fixed
  });

  return (
      <PageTemplate 
        title='Top Rated Movies'
        movies={topRated}  
        action={(movie) => {
          return <AddToWatchListButton movie={movie} />     
        }}
      />
  );
};

export default TopRatedMoviesPage;