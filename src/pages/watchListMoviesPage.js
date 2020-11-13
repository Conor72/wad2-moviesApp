import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListMoviesPage = () => {
  const context = useContext(MoviesContext);
  const watchlistmovies = context.upcoming.filter( m => m.watchlist )
  return (
    <MovieListPageTemplate
      movies={watchlistmovies}
      title={"Watch List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchListMoviesPage;