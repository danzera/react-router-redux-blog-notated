import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class ShowPost extends Component {
	componentDidMount() {
		// THIS IS WHERE WE FETCH OUR DATA!!!
		// action creator & reducer handle the assigning of data to our state
		// and mapStateToProps taps into the Redux store to get access to the state changes
		// so no need for a .then callback to handle the API response here
		this.props.fetchPost(this.props.match.params.id);
	}

	render() {
		console.log('this.props in ShowPost', this.props);
		console.log('url params in ShowPost', this.props.match.params);
		return (
			<div>Show Post View</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps state', state);
	return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPost })(ShowPost);