
import React from 'react';

import * as Core from '../components';
import SimpleEditor from './simple-editor';

export default class SimpleLayout extends React.Component {
	
	render() {
		return (
			<Core.Layout className="simple">
				<SimpleEditor />
			</Core.Layout>
		);
	}
}
