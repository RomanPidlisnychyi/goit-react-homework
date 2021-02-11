import React, { Component } from 'react';
import filmsApi from '../services/filmsApi';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    filmsApi
      .getReviews(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;

    return reviews ? (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>We don't have any reviews for this movie.</p>
    );
  }
}
