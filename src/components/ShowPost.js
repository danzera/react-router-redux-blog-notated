import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class ShowPost extends Component {
	componentDidMount() {
		// THIS IS WHERE WE FETCH OUR DATA!!!
		// action creator & reducer handle the assigning of data to our state
		// and mapStateToProps taps into the Redux store to get access to the state changes
		// so no need for a .then callback to handle the API response here
		// THIS IS HOW WE ACCESS OUR URL PARAMS
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	render() {
		console.log('this.props in ShowPost', this.props);
		console.log('url params in ShowPost', this.props.match.params);
		const post = this.props.post;
		// conditionally show loading message until content is returned from the API
		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<h2>{post.title}</h2>
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