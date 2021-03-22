
/***************************************************************************************************************************************************************
 *
 * link-lists function
 *
 * A simple list of inline links.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

/**
 * An item inside the LinkList component
 *
 * @param  {node}   text             - The link Text or link html
 * @param  {string} link             - The link URL, optional
 * @param  {string} linkComponent    - The component used for the link
 * @param  {object} li               - An additional object to be spread into the wrapping element, optional
 * @param  {object} onClick          - The onClick event handler
 * @param  {object} attributeOptions - Any other attribute options, optional
 */
export const LinkListItem = ({ text, link, linkComponent, li = {}, children, onClick, ...attributeOptions }) => {
	const LinkComponent = linkComponent;

	// If there is no link provided and an onClick function
	if( typeof onClick === 'function' ) {
		attributeOptions.onClick = onClick;

		// if we find an onClick event but no link we make it a link so onClick can be added (no button support yet)
		if( !link ) {
			link = '#';
		}
	}

	// If we are using a normal link
	if( LinkComponent === 'a' ) {
		attributeOptions.href = link;
	}
	// If we are using a link component
	else if( typeof LinkComponent === 'function' ) {
		attributeOptions.to = link;
	}

	if( link ){
		return (
			<li { ...li }>
				<LinkComponent { ...attributeOptions }>{ text }</LinkComponent>
				{ children }
			</li>
		)
	}

	return ( <li { ...li }>{ text }{ children }</li> );
};

LinkListItem.propTypes = {
	text: PropTypes.node.isRequired,
	link: PropTypes.string,
	li: PropTypes.object,
	onClick: PropTypes.func,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
};

LinkListItem.defaultProps = {
	linkComponent: "a",
};


/**
 * DEFAULT
 * The Link List component
 *
 * @param  {array}   items            - All items inside the link list to be passed to LinkListItem, format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options, optional
 */
export const LinkList = ({ inline, items, linkComponent, className = '', ...attributeOptions }) => (
	<ul className={ `${ className }${ inline ? '' : '' }` } { ...attributeOptions }>
		{
			items.map(
				( item, i ) => <LinkListItem linkComponent={ linkComponent } key={ i } { ...item } />
			)
		}
	</ul>
);

LinkList.propTypes = {
	inline: PropTypes.bool,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.node.isRequired,
			li: PropTypes.object,
		})
	).isRequired,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
};

LinkList.defaultProps = {
	linkComponent: "a",
};


export default LinkList;
