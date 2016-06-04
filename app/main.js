import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/violino.js'
import Violino from './containers/violino.js'

let store = createStore(reducer);

render(
  <Provider store={store}>
    <Violino />
  </Provider>,
  document.getElementById('root')
);

const play = () => {

  store.dispatch({type: 'SELECT_NOTE'});
  store.dispatch({type: 'HIDE_NOTE_DETAILS'});

  setTimeout(() => {
    store.dispatch({type: 'REVEAL_NOTE_DETAILS'});
  }, 500);

};

setInterval(() => {

  play();

}, 4000);

play();
