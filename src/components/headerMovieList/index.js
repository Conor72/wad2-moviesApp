import React from "react";
import "../movieCard/movieCard.css";

const Header = ({numMovies }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-4">
        <h2>
          Movies 
          <span className="color-blue badge badge-pill badge-success">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;