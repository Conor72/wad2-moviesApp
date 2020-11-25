import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'
                                                              
const NowPlayingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const nowPlaying = context.nowPlaying.filter((m) => {    
    return !("watchlist" in m);                             //TODO watchlist button needs to be fixed
  });

  return (
      <PageTemplate 
        title='Now Playing Movies'
        movies={nowPlaying}  
        action={(movie) => {
          return <AddToWatchListButton movie={movie} />     
        }}
      />
  );
};

export default NowPlayingMoviesPage;