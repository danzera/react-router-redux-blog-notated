import React, { Component } from 'react';

export default class NewPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			categories: '',
			content: ''
		}
	}

	render() {
		return (
			<div>NewPost</div>
		);
	}
}