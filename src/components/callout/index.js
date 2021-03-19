/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Callout function
 *
 * Use callout to notify and alert users of important snippets of information.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * Default callout
 *
 * @param  {string}  title            - The title of the header
 * @param  {string}  level            - The tag level (<h1/> <h2/> etc), default: '1'
 * @param  {boolean} srOnlyTitle      - Title is visible to screen readers only
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {string}  children         - Anything inside
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Callout = ({ title, level, srOnlyTitle, dark, alt, description, children, className = '', ...attributeOptions }) => {
	const HeadingTag = `h${ level }`;

	return (
		<div
			className={ `nsw-callout ${ className }${ dark ? ' nsw-callout--dark' : '' }${ alt ? ' nsw-callout--alt' : '' }` }
			{ ...attributeOptions }
		>
      <div class="nsw-callout__content">
  			<HeadingTag
  				children={ title }
  				className={ `nsw-callout__title${ srOnlyTitle ? ' nsw-callout__title--sronly' : '' }` }
  			/>
  			{ children }
      </div>
    </div>
	)
};

Callout.propTypes = {
	title: PropTypes.string.isRequired,
	level: PropTypes.number,
	srOnlyTitle: PropTypes.bool,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

Callout.defaultProps = {
	level: 4,
	srOnlyTitle: false,
};

export default Callout;
