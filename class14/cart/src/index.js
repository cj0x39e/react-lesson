import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './store/index';
import { Route } from "react-router-dom";
import Result from "./components/Result.jsx";
import "normalize.css";

// import { store } from './store/index';
import App from './components/Cart/index'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/" component={App} />
      <Route path="/result" component={Result} />
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
