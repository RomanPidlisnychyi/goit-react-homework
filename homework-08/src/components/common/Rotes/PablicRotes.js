import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';

export default function PablicRoute({ component: Component, ...rest }) {
    const isAuthenticated = useSelector(authSelectors.getToken);

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated && rest.restricted ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}
