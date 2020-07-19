import React, { useEffect } from 'react';
import axios from 'axios';

const Movies = props => {

    const movieType = props.match.params.movieType;

    useEffect(() => {
        const movieType = props.match.params.movieType;
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=7c3478971dd7448978e62b257855f491&language=es-ES`)
            .then( e => { console.log(e)})
            .catch(
                e => { console.log(e) }
            );
    }, [])

    return <div className = "movies" >
        Tipo de peícula: { props.match.params.movieType } </div>
}

export default Movies