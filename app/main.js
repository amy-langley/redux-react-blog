import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers'

import ReactDOM from 'react-dom'

import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

const reducer = combineReducers(reducers)
const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
