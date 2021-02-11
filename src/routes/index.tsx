import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard, SecondPage } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/second" component={SecondPage} />
  </Switch>
);

export default Routes;
