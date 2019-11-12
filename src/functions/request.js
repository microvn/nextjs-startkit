import Cookie from "js-cookie"
import 'isomorphic-fetch'

function filterGet(_filter) {
	return `?filter=${encodeURI(JSON.stringify(_filter))}`
}

function request(url, token, options) {
	const headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	};

	if (token) {
		headers['Authorization'] = token
	} else if (typeof localStorage !== "undefined" && localStorage.getItem('token')) {
		headers['Authorization'] = localStorage.getItem('token')
	} else if (typeof Cookie !== "undefined" && Cookie.get('token')) {
		headers['Authorization'] = Cookie.get('token')
	}

	return fetch(url, {
		headers,
		...options
	}).then(response => response.json())
		.then(data => {
			if (typeof data.error !== 'undefined' && data.error.statusCode !== 200) {
				throw new Error(data.error.message);
			}

			if (typeof data.meta !== 'undefined' && data.meta.status !== 200) {
				throw new Error(data.meta.message);
			}

			return data;
		})

}

export {filterGet, request};
