import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { devTools } from 'redux-devtools';

import * as reducers from './reducers'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

// aggregate the reducers (if there are more than one)
const reducer = combineReducers(reducers)

// hook in the redux dev tools
const finalCreateStore = compose(
  devTools(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

// build the store
const store = finalCreateStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
