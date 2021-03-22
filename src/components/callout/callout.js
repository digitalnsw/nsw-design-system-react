
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
 * @param  {string}  children         - Anything inside
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Callout = ({ title, level, description, children, className = '', ...attributeOptions }) => {
	const HeadingTag = `h${ level }`;

	return (
		<div
			className={ `nsw-callout ${ className }` }
			{ ...attributeOptions }
		>
      <div class="nsw-callout__content">
  			<HeadingTag
  				children={ title }
  				className={ `nsw-callout__title` }
  			/>
  			{ children }
      </div>
    </div>
	)
};

Callout.propTypes = {
  /**
   * Callout title
  */
	title: PropTypes.string.isRequired,
  /**
   * heading level (e.g. '4' for H4)
  */
	level: PropTypes.number,
  /**
   * Callout content
  */
	children: PropTypes.node.isRequired,
  /**
   * additional class names, optional
  */
	className: PropTypes.string,
};

Callout.defaultProps = {
	level: 4,
};

export default Callout;
