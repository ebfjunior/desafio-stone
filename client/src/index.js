import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReduxPromise from "redux-promise";

import PageLivrosIndex from './components/PageLivrosIndex';
import PageCartIndex from './components/PageCartIndex';
import reducers from './reducers/root';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/cart" component={PageCartIndex} />
          <Route path="/" component={PageLivrosIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.app'));
