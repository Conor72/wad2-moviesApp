import React from "react";
import Movie from "../movieCard/";
import "./movieList.css";

const MovieUpcoming = props => {
  const movieCards = props.movies.map(m => (
    <Movie key={m.id} movie={m} buttonHandler={props.buttonHandler} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default MovieUpcoming;