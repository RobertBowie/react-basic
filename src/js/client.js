import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './routes/Layout';
import Snake from './routes/Snake';
import ToDo from './routes/ToDo';
import ItsAlive from './routes/ItsAlive';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="todo" component={ToDo} />
      <Route path="snake" component={Snake} />
    </Route>
  </Router>,
app);
