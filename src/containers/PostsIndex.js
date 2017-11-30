import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: {}
		};
	}

	componentDidMount() {
		this.props.fetchPosts().then(res => console.log(res));
	}

	renderPosts() {
		console.log('this.state.posts', this.state.posts)
		return [<div>1</div>,<div>1</div>,<div>1</div>]
	}

	render() {
		return (
			<div>{this.renderPosts()}</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps state', state);
	return { posts: state.posts };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);