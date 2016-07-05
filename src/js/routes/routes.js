import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomePage from './HomePage';
import Layout from './Layout';
import Snake from './Snake';
import ToDo from './ToDo';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="snake" component={Snake} />
    <Route path="todo" component={ToDo} />
  </Route>
);
