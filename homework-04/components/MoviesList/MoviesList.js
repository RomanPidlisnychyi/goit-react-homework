import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import PropTypes from 'prop-types';

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

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_title: PropTypes.string,
            name: PropTypes.string,
        }),
    ),
    props: PropTypes.object,
};

export default MoviesList;
