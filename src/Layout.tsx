import React from 'react'
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';

const history = createBrowserHistory();

export const Layout = () => {
  return (
    <Router history={history}>
    <Switch>
      <Route component={AboutPage} path="/:username/about" />
      <Route component={HomePage} path="/" />
    </Switch>
  </Router>
  )
}
