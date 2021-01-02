import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Calendar from '../pages/Calendar';
import Home from '../pages/Home';
import Matrix from '../pages/Matrix';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calendario_academico" component={Calendar} />
      <Route exact path="/matriz_curricular" component={Matrix} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
