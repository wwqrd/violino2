import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Violino from './containers/violino.js'

let store = createStore(() => { return {}; });

render(
  <Provider store={store}>
    <Violino />
  </Provider>,
  document.getElementById('root')
);
