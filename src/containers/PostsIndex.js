import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
	// componentDidMount() is one of the React lifecycle methods, of which there are several
	// lifecycle methods are functions on class-based React components that are AUTOMATICALLY CALLED by React
	// componentDidMount() runs immediately after the component renders to the DOM
	// componentWillMount() is another possible place to fetch data, HOWEVER the render() function would still be run before the async request finishes
	// also, if you need to use server side rendering, componentWillMount() would be run twice, once on the server and once on the client
	// whereas componentDidMount() only runs once, on the client
	// additionally, with ES6 class-based components, the constructor plays a similar role to componentWillMount()
	// bottom line:
	// 1. componentDidMount() makes it clear that data won't be loaded until AFTER the initial render()
	// --> this reminds you to setup initial state properly so you don't end up with undefined state, which results in errors
	// 2. should you need to use server-side rendering, componentDidMount() will only run once, on the client
	// --> as opposed to componentWillMount(), which would run twice, once on the server and then again on the client
	componentDidMount() {
		// THIS IS WHERE WE FETCH OUR DATA!!!
		this.props.fetchPosts();
	}

	renderPosts() {
		console.log('this.props.posts', this.props.posts);
		// lodash map function can be used to iterate over both arrays and objects
		// native map function only works with
		// in the case of an object, _.map() iterates over all key value pairs and the callback receives parameters (value, key, originalObject)
		return _.map(this.props.posts, (post, id, posts) => {
			return (
				<li className="list-group-item" key={id}>
					{post.title}
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<div id="new-post-button" className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">Create New Post</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
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
// there will still be times when we want to define mapDispatchToProps() separately in order to do some type of computation regarding the action creator
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);