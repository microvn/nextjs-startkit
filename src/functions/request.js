import 'isomorphic-fetch'

function request(url, token, options) {
	const headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	};

	return fetch(url, {
		headers,
		...options
	}).then(response => response.json())
		.then(data => data);
}

export {request};
