import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppView from './app/appview';
import * as serviceWorker from './serviceWorker';
var redux = require("redux");
var Provider = require("react-redux").Provider;
var reducer = require("./store/reducer.jsx");

var store = redux.createStore(reducer);

store.dispatch({
  type: "SET_STATE",
  state: {
    phones: [ "iPhone 7 Plus", "Samsung Galaxy A5" ]
  }
});

ReactDOM.render(
//  <React.StrictMode>
    <Provider store={store}>
      <AppView />
    </Provider>,
//  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
