import React, { useContext, useState, useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';

import { ROUTES } from 'logic/constants';
import { Auth } from 'pages/Auth';
import { Cars } from 'pages/Cars';
import { AuthContext } from 'contexts/AuthContext';

export function Routes() {
  const { authenticated } = useContext(AuthContext);
  const { pathname } = useLocation();
  const [redirectToAuth, setRedirectToAuth] = useState(false);
  const [redirectToMain, setRedirectToMain] = useState(false);

  useEffect(() => {
    if (!authenticated && pathname !== ROUTES.auth) {
      setRedirectToAuth(true);
      setRedirectToMain(false);
    }
    if (authenticated && pathname === ROUTES.auth) {
      setRedirectToMain(true);
      setRedirectToAuth(false);
    }
  }, [authenticated, pathname]);

  return (
    <>
      {/* Auth Redirects */}
      {redirectToAuth && <Redirect to={ROUTES.auth} />}
      {redirectToMain && <Redirect to={ROUTES.main} />}

      <Switch>
        <Route path={ROUTES.auth}>
          <Auth />
        </Route>
        <Route path={ROUTES.main}>
          <Cars />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
