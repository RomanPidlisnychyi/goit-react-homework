import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

const MoviesList = ({ movies, props }) => {
    const moviesPath = routes.find(route => route.label === 'Movies').path;
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link
                        to={{
                            pathname: `${moviesPath}/${movie.id}`,
                            state: { from: props.location },
                        }}
                    >
                        {movie.original_title
                            ? `${movie.original_title}`
                            : `${movie.name}`}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default MoviesList;
