import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

// since we are ultimately going to store our state in an object, we default state to an empty object
export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log('FETCH_POSTS action data', action.payload.data);
			// use lodash function _.mapKeys() to generate a new object with desired key-value pairs of "id: postObject"
			const posts = _.mapKeys(action.payload.data, (value, key, object) => value.id);
			console.log('posts mapped to object', posts);
			return posts;
		default:
			return state;
	}
}