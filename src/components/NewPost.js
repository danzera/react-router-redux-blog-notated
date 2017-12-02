import React, { Component } from 'react';
// Field is a React component that's automatically wired up to redux-form
// reduxForm is a function that is very similar to the react-redux connect() function
// it allows our component to communicate with the formReducer that we wired into combineReducers
// this lets our component talk directly to the Redux store
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class NewPost extends Component {
	renderField(field) {
		console.log('field', field);
		return (
			<div className="form-group">
				<label htmlFor={field.inputId}>{field.label}</label>
				<input
					id={field.inputId}
					className="form-control"
					type="text"
					{...field.input} />
			</div>
		);
	}

	render() {
		console.log('current component-level state', this.state);
		return (
			<form onSubmit={this.onFormSubmit}>
				<Field name="title"
					component={this.renderField}
					inputId="newPostTitle"
					label="Title" />
				<Field name="categories"
					component={this.renderField}
					inputId="newPostCategories"
					label="Categories" />
				<Field name="content"
					component={this.renderField}
					inputId="newPostContent"
					label="Content" />

				<input type="submit" value="Create Post" />
				<Link to="/"><input type="button" value="Cancel" /></Link>
			</form>
		);
	}
}

// this is how we configure reduxForm, our helper that allows redux-form to talk directly from the component to the formReducer
export default reduxForm({
	// just need to specify some unique string to describe the form
	// will invariably end up with an application that has multiple forms
	// and will need them to have their own unique strings here
	// otherwise there would be issues with their state conflicting/interfering with each other
	form: 'PostsNewForm'
})(NewPost);