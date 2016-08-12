
import Electron from 'electron';
import FileSystem from 'fs';

const { dialog } = Electron.remote;
const initial = {
	path: null,
	data: null,
	edited: false
};

export const reducer = ( state = initial, action )=> {
	const { type, payload } = action;
	switch ( type ) {
		case 'FILE_OPEN':
			return {
				path: payload.path,
				data: payload.data
			};
		case 'FILE_EDIT':
			return {
				...state,
				data: payload.data,
				edited: true
			};
		case 'FILE_SAVE':
			return {
				...state,
				path: payload.path,
				edited: false
			};
		case 'FILE_CLOSE':
			return initial;
	}
	return state;
};

export const actions = {
	open: ()=> dispatch => {
		const options = {
			title: 'Select File',
			buttonLabel: 'Choose',
			properties: ['openFile']
		};
		dialog.showOpenDialog( options, ([ path ])=> {
			if ( !path ) return;
			try {
				const data = FileSystem.readFileSync( path );
				dispatch({
					type: 'FILE_OPEN',
					payload: {
						path,
						data
					}
				});
			}
			catch ( err ) {
				console.error( err );
			}
		});
	},
	edit: data => ({
		type: 'FILE_EDIT',
		payload: { data }
	}),
	save: ()=> ( dispatch, getState )=> {
		const { file } = getState();
		const { path, data } = file;
		const write = path => {
			try {
				FileSystem.writeFileSync( path, data );
				dispatch({
					type: 'FILE_SAVE',
					payload: { path }
				});
			}
			catch ( err ) {
				console.error( err );
			}
		};
		if ( path )
			return write( path );
		dialog.showSaveDialog({
			title: 'Save File',
			buttonLabel: 'Save'
		}, write )
	},
	close: ()=> ({
		type: 'FILE_CLOSE',
		payload: { }
	})
};
