import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import routes from '../routes';

export default function App() {
  const appRoutes = routes.filter(
    route => route.label !== 'Cast' && route.label !== 'Reviews'
  );

  return (
    <Layout>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          {appRoutes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Suspense>
    </Layout>
  );
}
