import React, { Component } from 'react';
import filmsApi from '../services/filmsApi';
import getQueryParams from '../utils/getQueryParams';
import Searchbox from '../components/Searchbox/Searchbox';
import MoviesList from '../components/MoviesList/MoviesList';

export default class MoviesPage extends Component {
    state = {
        films: [],
    };

    componentDidMount() {
        const { query } = getQueryParams(this.props.location.search);

        if (query) {
            this.fetchFilms(query);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { query: prevQuery } = getQueryParams(prevProps.location.search);
        const { query: nextQuery } = getQueryParams(this.props.location.search);

        if (prevQuery !== nextQuery) {
            this.fetchFilms(nextQuery);
        }
    }

    fetchFilms = query => {
        filmsApi.getSearch(query).then(films => this.setState({ films }));
    };

    handleChangeQuery = query => {
        this.props.history.push({
            ...this.props.location,
            search: `query=${query}`,
        });
    };

    render() {
        const { films } = this.state;
        return (
            <>
                <Searchbox onSubmit={this.handleChangeQuery} />
                {films.length > 0 && (
                    <MoviesList movies={films} props={this.props} />
                )}
            </>
        );
    }
}
