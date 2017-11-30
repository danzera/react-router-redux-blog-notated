import React, { Component } from 'react';
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
		return [<div>1</div>,<div>1</div>,<div>1</div>];
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
// we can pass an object to our call of the connect function
// as opposed to separately defining a mapDispatchToProps() function and passing that
// this effectively identical in nature to declaring:
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
// and passing this to the connect function
// there will still be times when we want to define mapDispatchToProps() separately in order to do some type of computation
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);