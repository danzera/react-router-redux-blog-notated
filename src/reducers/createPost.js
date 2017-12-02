import CREATE_POST from '../actions';

export default function(state = {}, action) {
	console.log('action received in createPost.js', action);
	switch (action.type) {
		case CREATE_POST:
			console.log('new post action received in reducer', action);
			console.log('current state', state);
			return state;
		default:
			return state;
	}
}