/*
 * resources/store.js
 * Tyler Williams <tyler.williams.it@gmail.com>
 * 08/09/2016
 *
 * A library module to instantiate and manage a Redux Store.
 */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import { reducer as project } from './project';

const create = initial => {
	
	const reducer = combineReducers({
		project
	});
	
	const middleware = [
		thunk,
		promise
	];
	
	return createStore( reducer, initial, applyMiddleware( ...middleware ));
};

export default { create };
