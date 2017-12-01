import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			categories: '',
			content: ''
		}
	}

	onFormSubmit(e) {
		e.preventDefault();
		console.log(e);
	}

	render() {
		console.log('current component-level state', this.state);
		return (
			<form onSubmit={this.onFormSubmit}>
				<div className="form-group">
					<label htmlFor="newPostTitle">Title</label>
					<input id="newPostTitle"
						className="form-control"
						type="text"
						value={this.state.title}
						onChange={e => this.setState({ title: e.target.value })} />
				</div>
				<div className="form-group">
					<label htmlFor="newPostCategories">Categories</label>
					<input id="newPostCategories"
						className="form-control"
						type="text"
						value={this.state.categories}
						onChange={e => this.setState({ categories: e.target.value })} />
				</div>
				<div className="form-group">
					<label htmlFor="newPostContent">Content</label>
					<input id="newPostContent"
						className="form-control"
						type="text"
						value={this.state.content}
						onChange={e => this.setState({ content: e.target.value })} />
				</div>
				
				<input type="submit" value="Create Post" />
				<Link to="/"><input type="button" value="Cancel" /></Link>
			</form>
		);
	}
}