import React, { Component } from 'react';
// Field is a React component that's automatically wired up to redux-form
// reduxForm is a function that is very similar to the react-redux connect() function
// it allows our component to communicate with the formReducer that we wired into combineReducers
// this lets our component talk directly to the Redux store
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class NewPost extends Component {
	// NOTE: we use the ternary operator to display error messages ONLY AFTER an input field has been touched
	// this prevents error messages from showing on page load, which would be an undesirable UI effect
	// clicking the submit button also flips all fields to touched, even if they were never touched, so error messages would show in that case as well
	renderField(field) {
		// another ES6 way of destructuring
		// this declares variables of meta == field.meta, touched == field.meta.touched and error == field.meta.error
		// really only need touched & error variables, so could just say: const { touched, error } = field.meta to pull those two off the field.meta object
		// just doing this to show another way of doing destructuring
		const { meta: { touched, error } } = field;
		// can use our touched & error values to conditionally determine the className we want to apply to our input fields
		const className = `form-group ${touched && error ? 'has-danger' : ''}`
		console.log('field', field);
		return (
			<div className={className}>
				<label htmlFor={field.inputId}>{field.label}</label>
				<input
					id={field.inputId}
					className="form-control"
					type="text"
					{...field.input} />
				<small className="form-text text-muted">{touched ? error : ''}</small>
			</div>
		);
	}

	/**
	 * we provide this function as a callback to redux-form's handleSubmit function
	 * this will be called IFF the form is validated
	 * @param {Object} values - provided by redux-form, contains all of the form's input values
	 */
	onSubmit(values) {
		console.log('form submitted with values', values);
	}

	render() {
		// pull handleSubmit function off of this.props
		// provided by the reduxForm() function, much like connect() function provides additional props
		const { handleSubmit } = this.props;
		// handleSubmit is called within onSubmit of our form
		// and is passed a function that we define (above)
		// handleSubmit runs the redux-form validation
		// IF everything checks out, then it runs the callback function that we provide
		// we bind the context of this to give our callback function a reference to the component
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
				<button className="btn btn-primary" type="submit">Create Post</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

/**
 * helper function that we define for validating form values
 * gets passed to reduxForm() function down below
 * will automatically be called at certain points in the forms lifecycle
 * particularly when the user tries to submit the form
 * @param {Object} values - called 'values' by convention, contains all form values
 * @returns {Object} - communicates any validation errors, empty object implies there are no errors and form is fine to submit
 */
function validate(values) {
	console.log('validate values', values);
	// always start off by creating an errors object
	const errors = {};
	// then validate the inputs from the 'values' object
	// add error messages to the errors object as needed
	if (!values.title) {
		errors.title = 'Your blog post needs a title...';
	}
	if (!values.categories) {
		errors.categories = 'Provide at least one category for your blog post...';
	}
	if (!values.content) {
		errors.content = 'Your blog post should very well have some content...';
	}

	console.log('errors in validate function', errors);
	// return the errors object
	// if the object is empty, it means the form is fine to submit
	// if there are ANY properties on the object, redux-form assumes the form is invalid
	return errors;
}

// this is how we configure reduxForm, our helper that allows redux-form to talk directly from the component to the formReducer
export default reduxForm({
	validate,
	// just need to specify some unique string to describe the form
	// will invariably end up with an application that has multiple forms
	// and will need them to have their own unique strings here
	// otherwise there would be issues with their state conflicting/interfering with each other
	form: 'PostsNewForm'
})(NewPost);