import React from 'react';
import routes from '../../routes';
import { Nav, LinkElem } from './styles';

const Navigation = () => (
    <Nav>
        {routes
            .filter(route => route.label === 'Home' || route.label === 'Movies')
            .map(route => (
                <LinkElem key={route.label} to={route.path} exact={route.exact}>
                    {route.label}
                </LinkElem>
            ))}
    </Nav>
);

export default Navigation;
