
import Electron from 'electron';

import * as Core from '../components';
import SimpleEditor from './simple-editor';
import SimpleLayout from './simple-layout';
import { reducer, actions } from './redux';

const { Menu, MenuItem } = Electron.remote;

export const main = app => {
	
	app.on('start', ()=> {
		
		app.setReducer('file', reducer );
		app.setActions('file', actions );
		app.setComponent( Core.Editor, SimpleEditor );
		app.setComponent( Core.Layout, SimpleLayout );
		
		const menu = Menu.getApplicationMenu();
		menu.insert( 0, new MenuItem({
			label: 'File',
			submenu: [
				{
					label: 'Open',
					click: ()=> app.actions('file').open()
				},
				{ type: 'separator' },
				{
					label: 'Save',
					click: ()=> app.actions('file').save()
				},
				{ type: 'separator' },
				{
					label: 'Close',
					click: ()=> app.actions('file').close()
				}
			]
		}));
		Menu.setApplicationMenu( menu );
	});
	
	app.on('ready', ()=> {
		const store = app.store();
		store.subscribe(()=> {
			const { file } = store.getState();
			const { path, edited } = file;
			document.title = ( path )
				? `IDE - ${ path } ${ edited ? '*' : '' }`
				: `IDE`;
		});
	});
};
