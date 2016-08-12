
import { bindActionCreators } from 'redux';
import { EventEmitter } from 'events';
import { create } from 'private-access';

const _ = create();

export default class App extends EventEmitter {

	constructor() {
		super();
		this[_.store] = null;
		this[_.components] = new Map();
		this[_.reducers] = new Map();
		this[_.actions] = new Map();
	}

	setComponent( ref, Component ) {
		this[_.components].set( ref, Component );
	}

	setStore( store ) {
		this[_.store] = store;
	}

	setReducer( name, reducer ) {
		this[_.reducers].set( name, reducer );
	}

	setActions( name, actions ) {
		this[_.actions].set( name, actions );
	}
	
	component( ref ) {
		return this[_.components].get( ref );
	}
	
	store( ) {
		return this[_.store];
	}
	
	reducer( name ) {
		return this[_.reducers].get( name );
	}
	
	reducers() {
		return this[_.reducers].entries();
	}
	
	actions( name ) {
		const actions = this[_.actions].get( name );
		const { dispatch } = this[_.store];
		return bindActionCreators( actions, dispatch );
	}
}
