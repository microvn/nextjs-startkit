import React from 'react';

const Label = ({error, className, children, ...props}) => (
	<label {...props}>
		{children}
	</label>
);
export default Label
