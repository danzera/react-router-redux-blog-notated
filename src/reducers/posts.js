import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

// since we are ultimately going to store our state in an object, we default state to an empty object
export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log('FETCH_POSTS action data', action.payload.data);
			// use lodash function _.mapKeys() to generate a new object with desired key-value pairs of "id: postObject"
			// the second parameter can either be the key name that you want to use the value of for the new object's key name
			// or it can be a callback function that determines the values of the key names, i.e. (value, key, object) => { }
			// where value is the current element / key-value, key is the index/key of the current element, and object is the entire original object (or array)
			const posts = _.mapKeys(action.payload.data, 'id');
			console.log('posts mapped to object', posts);
			return posts;
		default:
			return state;
	}
}