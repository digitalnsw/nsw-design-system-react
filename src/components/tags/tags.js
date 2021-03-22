
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
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Tag = ({ link,  text, linkComponent, className, ...attributeOptions }) => {

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
			<LinkComponent className={`nsw-tag ${className}`} { ...attributeOptions }>{ text }</LinkComponent>
			:
			<TagContainer {...attributeOptions} className={`nsw-tag ${className}`}>
				{text}
			</TagContainer>
	)
}


Tag.propTypes = {
  /**
  * Additional class name
  */
  className: PropTypes.string,
  /**
  * Tag link
  */
	link: PropTypes.string,
  /**
  * Tag text
  */
	text: PropTypes.string.isRequired,
  /**
  * Link component (a/func)
  */
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
 * @param  {array}   tags             - The tags, format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  li               - An additional object to be spread into the list item
 * @param  {object}  attributeOptions - Any other attribute options
 */
const TagList = ({ tags, className = '', ...attributeOptions }) => (
	<div className={ `nsw-tag-list ${ className }` } { ...attributeOptions }>
		{
			tags.map(
				( tag, i ) => (

						<Tag
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
};

export default TagList;
