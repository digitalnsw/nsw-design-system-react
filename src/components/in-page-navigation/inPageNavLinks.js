import React from 'react';
import PropTypes from 'prop-types';

/**
 * The section component for the InpageNavLinks component
 *
 * @param  {object} link             - The link of this section
 * @param  {object} title            - The title of the section
 * @param  {object} li               - An additional object to be spread
*                                      into the wrapping element, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const InpageNavLinksItem = ({
  url, title, li = {}, ...attributeOptions
}) => (
  <li className="nsw-page-nav__list-item" {...li}>
    <a className="nsw-page-nav__link" href={`#${url}`} {...attributeOptions}>{ title }</a>
  </li>
);

InpageNavLinksItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  li: PropTypes.shape,
};

/**
 * The inpage-nav component
 *
 * @param  {string}  title            - The title of the content link block, default: Contents
 * @param  {array}   sections         - An array of objects of all sections, sample:
 *                                      { link: '', title: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  ariaLabel        - The aria-label attribute, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const InpageNavLinks = ({
  title, links, ariaLabel, className = '', ...attributeOptions
}) => (
  <nav className={`nsw-page-nav ${className}`} ariaLabel={ariaLabel} {...attributeOptions}>
    <h2 className="nsw-page-nav__title">{ title }</h2>

    <ul className="nsw-page-nav__list">
      { links.map((link) => <InpageNavLinksItem key={link.url} {...link} />) }
    </ul>
  </nav>
);

InpageNavLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      li: PropTypes.shape,
    }),
  ).isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

InpageNavLinks.defaultProps = {
  ariaLabel: 'in page navigation',
};

export default InpageNavLinks;
