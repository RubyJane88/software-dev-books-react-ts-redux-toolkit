import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<h2>Loading</h2>}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={props => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes: Routes = [
  {
    exact: true,
    path: '/',
    component: lazy(
      () => import('../src/features/anti-heroes/pages/AntiHeroes'),
    ),
  },
  {
    exact: true,
    path: '/anti-heroes',
    component: lazy(
      () => import('../src/features/anti-heroes/pages/AntiHeroes'),
    ),
  },
  {
    exact: true,
    path: '/villains',
    component: lazy(() => import('../src/features/villains/pages/Villains')),
  },
  {
    exact: true,
    path: '/heroes',
    component: lazy(() => import('../src/features/heroes/pages/Heroes')),
  },

  {
    exact: true,
    path: '/apress-books',
    component: lazy(() => import('../src/features/apress/pages/ApressBooks')),
  },

  {
    exact: true,
    path: '/packt-books',
    component: lazy(() => import('../src/features/packt/pages/PacktBooks')),
  },

  {
    exact: true,
    path: '/manning-books',
    component: lazy(() => import('../src/features/manning/pages/ManningBooks')),
  },

  {
    exact: true,
    path: '/oreilly-books',
    component: lazy(() => import('../src/features/oreilly/pages/OreillyBooks')),
  },

  {
    component: () => <Redirect to={'/toolkit'} />,
  },
];

export default routes;
