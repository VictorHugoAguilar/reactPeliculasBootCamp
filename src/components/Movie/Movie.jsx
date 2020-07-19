import React from "react";
// Importamos Stylos
import './Movie.scss';

const Movie = ({movie}) => {

    return (
        <div className="movie">
            <h4>{movie.title}</h4>
            <img src={"http://image.tmdb.org/t/p/w200"+movie.poster_path} alt={movie.title} />
            <p>{movie.vote_average}</p>



        </div>
    );

}

export default Movie;