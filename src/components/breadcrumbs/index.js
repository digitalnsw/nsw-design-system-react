
/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * breadcrumbs function
 *
 * Breadcrumbs help users understand where they are in the service and how they got there.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';


// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * DEFAULT
 * The breadcrumbs component
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {string}  label            - The aria label of the component
 * @param  {array}   items            - Items inside the breadcrumbs passed on to BreadcrumbLinkList
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const Breadcrumbs = ({ dark, label, items, linkComponent, className = '', ...attributeOptions }) => (
	<nav
		className={ `nsw-breadcrumb ${ className }` }
		aria-label={ label }
		{ ...attributeOptions }
	>
		<BreadcrumbLinkList inline linkComponent={ linkComponent } items={ items } />
	</nav>
);

Breadcrumbs.propTypes = {
	dark: PropTypes.bool,
	label: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			link: PropTypes.string,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
};

Breadcrumbs.defaultProps = {
	linkComponent: 'a',
};

/**
 * An item inside the BreadcrumbLinkList component
 *
 * @param  {node}   text             - The link Text or link html
 * @param  {string} link             - The link URL, optional
 * @param  {string} linkComponent    - The component used for the link
 * @param  {object} li               - An additional object to be spread into the wrapping element, optional
 * @param  {object} onClick          - The onClick event handler
 * @param  {object} attributeOptions - Any other attribute options, optional
 */
export const BreadcrumbLinkListItem = ({ text, link, linkComponent, li = {}, children, onClick, ...attributeOptions }) => {
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
			<li className='nsw-breadcrumb__item' { ...li }>
				<LinkComponent className='nsw-breadcrumb__link' { ...attributeOptions }>{ text }</LinkComponent>
				{ children }
			</li>
		)
	}

	return ( <li className='nsw-breadcrumb__item' { ...li }>{ text }{ children }</li> );
};

BreadcrumbLinkListItem.propTypes = {
	text: PropTypes.node.isRequired,
	link: PropTypes.string,
	li: PropTypes.object,
	onClick: PropTypes.func,
	linkComponent: PropTypes.oneOfType([ PropTypes.string, PropTypes.func ])
};

BreadcrumbLinkListItem.defaultProps = {
	linkComponent: "a",
};


/**
 * DEFAULT
 * The Link List component
 *
 * @param  {array}   items            - All items inside the link list to be passed to BreadcrumbLinkListItem, format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options, optional
 */
const BreadcrumbLinkList = ({ inline, items, linkComponent, className = '', ...attributeOptions }) => (
	<ol className={ `nsw-breadcrumb__list ${ className }${ inline ? ' nsw-breadcrumb__list--inline' : '' }` } { ...attributeOptions }>
		{
			items.map(
				( item, i ) => <BreadcrumbLinkListItem linkComponent={ linkComponent } key={ i } { ...item } />
			)
		}
	</ol>
);

BreadcrumbLinkList.propTypes = {
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

BreadcrumbLinkList.defaultProps = {
	linkComponent: "a",
};

export default Breadcrumbs;
