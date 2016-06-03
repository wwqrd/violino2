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

setInterval(() => {
  store.dispatch({type: 'SELECT_NOTE'});
}, 2000);
