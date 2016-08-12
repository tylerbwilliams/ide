
import React from 'react';

export default class Editor extends React.Component {
	
	render() {
		const { className, ...rest } = this.props;
		return (
			<div { ...rest } className={`editor ${ className || '' }`} />
		);
	}
}
