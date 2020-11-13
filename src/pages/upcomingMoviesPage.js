import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'
                                                              
const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
      <PageTemplate 
        title='No. Movies'
        movies={movies}  /* Changed */
        action={(movie) => {
          return <AddToWatchListButton movie={movie} />     //TODO add funcitonality for this button
        }}
      />
  );
};

export default UpcomingMoviesPage;