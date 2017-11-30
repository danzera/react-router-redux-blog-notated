import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_KEY = 'danqzera';
const baseUrl = 'https://reduxblog.herokuapp.com/api';

export function fetchPosts() {
	const url = `${baseUrl}/posts?key=${API_KEY}`;
	const request = axios.get(url);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}