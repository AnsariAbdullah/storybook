import React from 'react';
import './Pill.css';

const Pills = (props) => {
	const {variant, children, ...rest} = props;
	return (
		<span className={`pill ${variant}`} {...rest}>
			{children}
		</span>
	);
}
 
export default Pills;