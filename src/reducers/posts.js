import { FETCH_POSTS } from '../actions';

// since we are ultimately going to store our state in an object, we default state to an empty object
export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			console.log('FETCH_POSTS action data', action.payload.data);
			const posts = mapObjectsArrayToObject('id', action.payload.data);
			console.log('posts mapped to object', posts);
			return posts;
		default:
			return state;
	}
}

/**
 * transform array of objects to an object with one of the objects' key-values as the key in our return object
 * @param {string} keyName - the name of the object key whose VALUE we should use for our new object's keys
 * @param {Array} array - array of objects to be added to our new object
 * @returns {Object} - contains all objects from the input array, the keys for the return object corresponding to the value of 'keyName' for each object
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