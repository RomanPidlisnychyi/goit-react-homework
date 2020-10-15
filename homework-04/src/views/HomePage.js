import React, { Component } from 'react';
import MoviesList from '../components/MoviesList/MoviesList';
import filmsApi from '../services/filmsApi';

export default class HomePage extends Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        filmsApi.getTrending().then(movies => this.setState({ movies }));
    }

    render() {
        const { movies } = this.state;
        return (
            <div>
                <h1>Tranding today</h1>

                {movies.length > 0 && (
                    <MoviesList props={this.props} movies={movies} />
                )}
            </div>
        );
    }
}
