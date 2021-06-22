import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Matriz from '../pages/Matriz';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/matriz_curricular" component={Matriz} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
