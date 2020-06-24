import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from 'logic/constants';
import { Auth } from 'pages/Auth';
import { Cars } from 'pages/Cars';

export function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.auth}>
        <Auth />
      </Route>
      <Route path={ROUTES.main}>
        <Cars />
      </Route>
    </Switch>
  );
}

export default Routes;
