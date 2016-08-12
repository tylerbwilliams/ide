
import React from 'react';

export default class Layout extends React.Component {
	
	render() {
		const { className, ...rest } = this.props;
		return (
			<div { ...rest } className={`layout ${ className || '' }`} />
		);
	}
}
