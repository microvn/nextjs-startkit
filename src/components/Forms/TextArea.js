import React from 'react';
import Error from "./Error"
import Label from "./Label"

const TextArea = ({type, id, label, error, value = '', disable, height, onChange, onBlur, className, ...props}) => (
	<div>
		<Label htmlFor={id} error={error}>
			{label}
		</Label>
		<textarea
			id={id}
			className={className}
			disabled={disable}
			onChange={onChange}
			onBlur={onBlur}
			style={{height: height}}
			defaultValue={value}/>
		<Error error={error}/>
	</div>
);


export default TextArea
