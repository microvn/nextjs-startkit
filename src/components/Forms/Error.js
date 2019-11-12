import React from 'react';

const ErrorText = ({id, error}) =>
	error ? (
		<label id={id} htmlFor={id}>{error}</label>
	) : null;

export default ErrorText
