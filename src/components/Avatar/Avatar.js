import React from 'react';
import './Avatra.css';

const Avatar = (props) => {
	const { variant = 'normal', children, ...rest} = props
	return (
		<div className={`wrapper ${variant}`} {...rest}>
			{children}
		</div>
	);
}
 
export default Avatar;