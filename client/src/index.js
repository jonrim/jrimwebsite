import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store/configureStore';

import Landing from './components/Landing';

import './index.scss';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/'>
        <IndexRoute component={Landing} />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('app')
);