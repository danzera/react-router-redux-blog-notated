import { FETCH_POSTS } from '../actions';

export default function posts(state = null, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log('FETCH_POSTS action', action);
			return state;
		default:
			console.log('some action...');
			return state;
	}
}