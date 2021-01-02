import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Calendar from '../pages/Calendar';
import Home from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calendar" component={Calendar} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
