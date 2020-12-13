import React from 'react';
import { Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import routes from '../routes';
import PablicRotes from './common/Rotes/PablicRotes';
import PrivateRoute from './common/Rotes/PrivateRoute';

export default function App() {
    return (
        <Layout>
            <Switch>
                {routes.map(route =>
                    route.private ? (
                        <PrivateRoute key={route.label} {...route} />
                    ) : (
                        <PablicRotes key={route.label} {...route} />
                    ),
                )}
            </Switch>
        </Layout>
    );
}
