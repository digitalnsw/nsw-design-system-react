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
  url, title, ...attributeOptions
}) => (
  <li>
    <a href={`${url}`} {...attributeOptions}>{ title }</a>
  </li>
);

InpageNavLinksItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
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
export const InPageNavLinks = ({
  title, links, ariaLabel, className = '', ...attributeOptions
}) => (
  <nav className={`nsw-in-page-nav ${className}`} aria-labelled-by={ariaLabel} {...attributeOptions}>
    <div id={ariaLabel} className="nsw-in-page-nav__title">{ title }</div>

    <ul>
      { links ? links.map((link) => <InpageNavLinksItem {...link} key={link.title} />) : '' }
    </ul>
  </nav>
);

InPageNavLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string.isRequired,
      li: PropTypes.shape,
    }),
  ).isRequired,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

InPageNavLinks.defaultProps = {
  ariaLabel: 'in page navigation',
};

export default InPageNavLinks;
