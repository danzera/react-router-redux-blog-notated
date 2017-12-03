import React, { Component } from 'react';

export default class ShowPost extends Component {
	render() {
		console.log('this.props in ShowPost', this.props);
		console.log('url params in ShowPost', this.props.match.params);
		return (
			<div>Show Post View</div>
		);
	}
}