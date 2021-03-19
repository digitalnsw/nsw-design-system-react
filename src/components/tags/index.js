/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * tags function
 *
 * Use tags to apply a taxonomy and link to similar content.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

/**
 * TODO
 * @param  {string}  link             - The link for this tag, optional
 * @param  {string}  text             - The text for the tag
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Tag = ({ link, dark, text, linkComponent, className, ...attributeOptions }) => {

	let TagContainer = 'span';
	let LinkComponent = linkComponent;


	if( LinkComponent === 'a' ) {
		attributeOptions.href = link;
	}
	// If we are using a link component
	else if( typeof LinkComponent === 'function' ) {
		attributeOptions.to = link;
	}

	return (
		link ?
			<LinkComponent className={`nsw-tag ${ dark ? 'nsw-tag--dark' : ''} ${className}`} { ...attributeOptions }>{ text }</LinkComponent>
			:
			<TagContainer {...attributeOptions} className={`nsw-tag ${ dark ? 'nsw-tag--dark' : ''} ${className}`}>
				{text}
			</TagContainer>
	)
}


Tag.propTypes = {
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	li: PropTypes.object,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ]),
};

Tag.defaultProps = {
	linkComponent: 'a',
	className: ''
};



/**
 * DEFAULT
 * The tags component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {array}   tags             - The tags, format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  li               - An additional object to be spread into the list item
 * @param  {object}  attributeOptions - Any other attribute options
 */
const TagList = ({ dark, tags, className = '', ...attributeOptions }) => (
	<div className={ `nsw-tag-list ${ className }` } { ...attributeOptions }>
		{
			tags.map(
				( tag, i ) => (

						<Tag
							dark={dark}
							linkComponent={ tag.linkComponent }
							link={tag.link}
							text={tag.text}
							{...tag.attributeOptions}
						/>

				)
			)
		}
	</div>
);

TagList.propTypes = {
	dark: PropTypes.bool,
	tags: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
			li: PropTypes.object,
		})
	).isRequired,
	className: PropTypes.string,
};

TagList.defaultProps = {
	dark: false
};

export default TagList;
