import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Componentes personalizados
import Movie from '../../components/Movie/Movie';

// Importamos Stylos
import './Movies.scss';

const Movies = props => {

    const [movies, setMovies] = useState([]);
    const movieType = props.match.params.movieType;

    useEffect(() => {
        const movieType = props.match.params.movieType;
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=7c3478971dd7448978e62b257855f491&language=es-ES`)
            .then(res => {
                console.log(res.data.results)
                setMovies(res.data.results);
            })
            .catch(
                e => { console.log(e) }
            );
    }, [movieType]);

    return (
        <div className="movies" >
            {movies?.map(movie => <Movie key={movie.id}  movie={movie} />)}
        </div>
    )
}

export default Movies