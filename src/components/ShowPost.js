import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class ShowPost extends Component {
	componentDidMount() {
		// THIS IS WHERE WE FETCH OUR DATA!!!
		// action creator & reducer handle the assigning of data to our state
		// and mapStateToProps taps into the Redux store to get access to the state changes
		// so no need for a .then callback to handle the API response here
		// THIS IS HOW WE ACCESS OUR URL PARAMS
		// (using more ES6 destructuring to pull the id off of the route params object)
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	render() {
		console.log('this.props in ShowPost', this.props);
		console.log('url params in ShowPost', this.props.match.params);
		const { post } = this.props;
		// conditionally show loading message  until content is returned from the API
		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/" className="btn btn-primary">All Posts</Link>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

/**
 * 
 * @param {Object} posts - using destructuring to pull the posts object out of the state object (don't need the whole state object)
 * @param {Object} ownProps - THERE'S ALSO A SECOND ARGUMENT in mapStateToProps called 'ownProps' by convention; corresponds to the props that are going/headed to the component
 */
function mapStateToProps({ posts }, ownProps) {
	console.log('posts in ShowPost', posts);
	console.log('ownProps in ShowPost', ownProps);
	// can use own props to send back only the post that we want to show (provided by the id <Route /> param)
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(ShowPost);