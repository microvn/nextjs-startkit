import React from 'react';
import Error from "./Error"
import Label from "./Label"

const TextInput = ({type, max, id, label, error, value = '', disable, onChange, className, ...props}) => (
	<div>
		<Label htmlFor={id}>
			{label}
		</Label>
		<input
			id={id}
			className={className}
			type={type}
			value={value ? value : ''}
			disabled={disable}
			onChange={onChange}
			checked={!!value}
			{...props}
		/>
		<Error id={id} error={error}/>
	</div>
);


export default TextInput
