import React from 'react';
import propTypes from 'prop-types';

function Title(props) {
	return (
		<>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</>
	);
}

Title.propTypes = {
	title: propTypes.string
};
//propTypes is a support for developers to see if you forgot to set an element

export default Title;
