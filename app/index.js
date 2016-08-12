
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import Store from './resources/store';

console.log('Hello, Developer!');

const root = document.getElementById('root');
const store = Store.create();
const elements = (
	<Provider store={ store }>
		<App />
	</Provider>
);

ReactDOM.render( elements, root );
