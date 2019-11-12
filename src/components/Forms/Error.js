import React from 'react';

const ErrorText = ({id, error}) =>
	error ? (
		<label id={id} className="validation-error-label" htmlFor={id}>{error}</label>
	) : null;

export default ErrorText
