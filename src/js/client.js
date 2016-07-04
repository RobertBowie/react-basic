import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Routes from './routes/Routes';


const app = document.getElementById('app');

ReactDOM.render(
  <Router routes={Routes} history={hashHistory} />, app
);
