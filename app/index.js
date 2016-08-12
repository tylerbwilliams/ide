
import Electron from 'electron';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import Store from './resources/store';
import * as Core from './components';
import * as Bootstrap from './bootstrap';

console.log('Hello, Developer!');

const { Menu } = Electron.remote;

const app = new App();
const menu = new Menu();

Menu.setApplicationMenu( menu );

Bootstrap.main( app );

app.emit('start');
	
const root = document.getElementById('root');
const store = Store.create( app );
const Layout = app.component( Core.Layout );
const elements = (
	<Provider store={ store }>
		<Layout />
	</Provider>
);

ReactDOM.render( elements, root );

app.emit('ready');
