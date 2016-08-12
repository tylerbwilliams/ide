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

const create = app => {
	
	const reducers = { };
	for ( let [ name, reducer ] of app.reducers() )
		reducers[name] = reducer;
	
	const reducer = combineReducers( reducers );
	
	const middleware = [
		thunk,
		promise
	];
	
	const store = createStore( reducer, undefined, applyMiddleware( ...middleware ));
	
	app.setStore( store );
	
	return store;
};

export default { create };
