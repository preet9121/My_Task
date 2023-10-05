// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import MyAccount from './components/MyAccount';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <Login login={login} />
        </Route>
        <PrivateRoute
          path="/my-account"
          exact
          component={MyAccount}
          isAuthenticated={isAuthenticated}
        />
        <Route path="/" exact>
          <h1>Home Page</h1>
          {isAuthenticated ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <p>You are not logged in.</p>
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
