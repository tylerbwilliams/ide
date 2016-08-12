/*
 * resources/project.js
 * Tyler Williams <tyler.williams.it@gmail.com>
 * 08/09/2016
 *
 * Define resource reducer and actions for Redux.
 * Events *should* be created as const strings with a prefix of `{RESOURCE}_`.
 * Initial data *should* be created as a const and passed as the default state.
 * Actions *must* be added to the exported `actions` object.
 */

const LOAD = 'PROJECT_LOAD';

const initial = {
	dirname: null
};

export const reducer = ( state = initial, action )=> {
	const { type } = action;
	switch ( action.type ) {
		case LOAD:
			return {
				...state,
				dirname: action.dirname
			};
	}
	return state;
};

export const actions = {
	load: dirname => ({
		type: LOAD,
		dirname
	})
};
