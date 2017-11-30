import { FETCH_POSTS } from '../actions';

export default function posts(state = null, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log('FETCH_POSTS action', action);
			const posts = mapObjectsArrayToObject('id', action.payload.data);
			console.log('posts mapped to object', posts);
			return posts;
		default:
			console.log('some action...');
			return state;
	}
}

/**
 * 
 * @param {string} keyName - the name of the object key whose VALUE we should use for our new object's keys
 * @param {Array} array - array of objects to be added to our new object
 */
function mapObjectsArrayToObject(keyName, array) {
	console.log('mapping objects array...keyName', keyName, 'original array', array);
	let result = {};
	for (let i = 0; i < array.length; i++) {
		const elemId = array[i][keyName];
		result[elemId] = array[i];
	}
	return result;
}