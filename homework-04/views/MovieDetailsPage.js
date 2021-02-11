import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import filsmApi from '../services/filmsApi';
import routes from '../routes';
import image from '../Images/photo.jpg';
import { Card, Img, Button, Info } from './styles';

export default class MovieDetailsPage extends Component {
  state = { film: null };

  componentDidMount() {
    filsmApi
      .getFilmById(this.props.match.params.movieId)
      .then(film => this.setState({ film }));
  }

  handleGoBack = () => {
    const moviesPath = routes.find(route => route.label === 'Movies').path;

    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(moviesPath);
  };

  render() {
    const { film } = this.state;

    const detalPageRoutes = routes.filter(
      route => route.label === 'Cast' || route.label === 'Reviews',
    );

    let filmName;

    if (film) {
      filmName = film.original_title ? film.original_title : film.name;
    }

    return (
      <div>
        {film && (
          <>
            <Button type="button" onClick={this.handleGoBack}>
              Go back
            </Button>
            <br />
            <Card>
              <Img
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
                    : `${image}`
                }
                alt={filmName}
              />
              <div>
                <h2>
                  {filmName
                    ? `${filmName} (${film.release_date.substring(0, 4)})`
                    : `${filmName}`}
                </h2>
                <p>User Score: {film.vote_average * 10}%</p>
                <h3>Overview</h3>
                <p>{film.overview}</p>
                <h3>Genres</h3>
                <p>
                  {film.genres
                    ? film.genres.map(genre => genre.name).join(', ')
                    : ''}
                </p>
              </div>
            </Card>
            <Info>
              <p>Additional information</p>
              <ul>
                {detalPageRoutes.map(route => (
                  <li key={route.label}>
                    <Link
                      to={{
                        pathname: `${
                          this.props.match.url
                        }/${route.label.toLocaleLowerCase()}`,
                        state: {
                          from: this.props.location.state.from,
                        },
                      }}
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Info>
            {detalPageRoutes.map(route => (
              <Route
                key={route.label}
                path={route.path}
                component={route.component}
              />
            ))}
          </>
        )}
      </div>
    );
  }
}
// import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
// import filsmApi from '../services/filmsApi';
// import routes from '../routes';
// import image from '../Images/photo.jpg';
// import { Card, Img, Button, Info } from './styles';

// export default class MovieDetailsPage extends Component {
//   state = { film: null };

//   componentDidMount() {
//     filsmApi
//       .getFilmById(this.props.match.params.movieId)
//       .then(film => this.setState({ film }));
//   }

//   handleGoBack = () => {
//     const moviesPath = routes.find(route => route.label === 'Movies').path;

//     const { state } = this.props.location;
//     if (state && state.from) {
//       return this.props.history.push(state.from);
//     }

//     this.props.history.push(moviesPath);
//   };

//   render() {
//     const { film } = this.state;

//     const detalPageRoutes = routes.filter(
//       route => route.label === 'Cast' || route.label === 'Reviews',
//     );

//     let filmName;

//     if (film) {
//       filmName = film.original_title ? film.original_title : film.name;
//     }

//     return (
//       <div>
//         {film && (
//           <>
//             <Button type="button" onClick={this.handleGoBack}>
//               Go back
//             </Button>
//             <br />
//             <Card>
//               <Img
//                 src={
//                   film.poster_path
//                     ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
//                     : `${image}`
//                 }
//                 alt={filmName}
//               />
//               <div>
//                 <h2>
//                   {filmName
//                     ? `${filmName} (${film.release_date.substring(0, 4)})`
//                     : `${filmName}`}
//                 </h2>
//                 <p>User Score: {film.vote_average * 10}%</p>
//                 <h3>Overview</h3>
//                 <p>{film.overview}</p>
//                 <h3>Genres</h3>
//                 <p>
//                   {film.genres
//                     ? film.genres.map(genre => genre.name).join(', ')
//                     : ''}
//                 </p>
//               </div>
//             </Card>
//             <Info>
//               <p>Additional information</p>
//               <ul>
//                 {detalPageRoutes.map(route => (
//                   <li key={route.label}>
//                     <Link
//                       to={{
//                         pathname: `${
//                           this.props.match.url
//                         }/${route.label.toLocaleLowerCase()}`,
//                         state: {
//                           from: this.props.location.state.from,
//                         },
//                       }}
//                     >
//                       {route.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </Info>
//             {detalPageRoutes.map(route => (
//               <Route
//                 key={route.label}
//                 path={route.path}
//                 component={route.component}
//               />
//             ))}
//           </>
//         )}
//       </div>
//     );
//   }
// }
