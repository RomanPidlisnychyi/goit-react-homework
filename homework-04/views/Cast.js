import React, { Component } from 'react';
import filmsApi from '../services/filmsApi';
import styled from 'styled-components';

const Img = styled.img`
    width: 100px;
`;

export default class Cast extends Component {
    state = {
        cast: [],
    };

    componentDidMount() {
        filmsApi
            .getCredits(this.props.match.params.movieId)
            .then(cast => this.setState({ cast }));
    }

    render() {
        const { cast } = this.state;

        let newCast;

        if (cast.length > 0) {
            newCast = cast.filter(actor => actor.profile_path);
        }

        return (
            <>
                {cast.length > 0 && (
                    <ul>
                        {newCast.map(actor => (
                            <li key={actor.cast_id}>
                                <Img
                                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                    alt={actor.name}
                                />
                                <p>
                                    {actor.name} ({actor.character})
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
                {cast.length === 0 && (
                    <p>We don't have any cast for this movie.</p>
                )}
            </>
        );
    }
}
