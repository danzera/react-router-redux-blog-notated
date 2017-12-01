import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const BASE_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=danqzera';

export function fetchPosts() {
	const url = `${BASE_URL}/posts${API_KEY}`;
	// axios.get() returns a promise
	// redux-promise middleware will handle this promise for us and return a new action with the fullfilled promise
	const request = axios.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}