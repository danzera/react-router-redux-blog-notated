import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
	constructor(props) {
		super(props);

		this.state = {
			postsFetched: false,
			posts: props.fetchPosts()
		};

		console.log('props', props);
		console.log('state', this.state);
	}

	render() {
		return (
			<div>PostsIndex</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);