
import React from 'react';
import { connect } from 'react-redux';

import * as Core from '../components';
import { actions } from './redux';

@connect(({ file })=> ({ data: file.data }))
export default class Editor extends React.Component {
	
	handleChange = evt => {
		this.props.dispatch( actions.edit( evt.target.value ));
	};
	
	render() {
		return (
			<Core.Editor className="simple">
				<textarea
					onChange={ this.handleChange }
					value={ this.props.data || '' } />
			</Core.Editor>
		);
	}
}
