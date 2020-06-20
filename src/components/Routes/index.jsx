import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from 'logic/constants';
import { Auth } from 'pages/Auth';

export function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.auth}>
        <Auth />
      </Route>
    </Switch>
  );
}

export default Routes;
