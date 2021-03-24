/***************************************************************************************************************************************************************
 *
 * footer function
 *
 * Footers help users who reach the bottom of a page without finding what they want.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';

/**
 * A section for the footer that sits at the end
 *
 * @param  {node}   children         - The inside of this section
 * @param  {array}  footerLinks     - The section links, format: { url: '', text: '' }
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const FooterLinks = ({heading, footerLinks, children, className = '', ...attributeOptions}) => (
    <ul className={`nsw-footer-links ${className}`} {...attributeOptions}>
            {footerLinks.map((footerLink) => (
                <li className="nsw-footer-links__item">
                    <a class="nsw-footer-links__link" href={footerLink.url}>{footerLink.text}</a>
                </li>
            ))}
    </ul>
);

FooterLinks.propTypes = {
    footerLinks: PropTypes.arrayOf((
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )),
    className: PropTypes.string,
};

/**
 * A section for the footer that sits at the end
 *
 * @param  {node}   children         - The inside of this section
 * @param  {object}  heading         - The heading section link, format: { url: '', text: '' }
 * @param  {array}  sectionLinks     - The section links, format: { url: '', text: '' }
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const FooterSectionGroup = ({heading, sectionLinks, children, className = '', ...attributeOptions}) => (
    <div className={`section-links__group ${className}`} {...attributeOptions}>
        <h3 className="section-links__heading"><a href={heading.url}>{heading.text}</a></h3>
        <ul className="section-links__list">
            {sectionLinks.map((sectionLink) => (
                <li className="section-links__item">
                    <a href={sectionLink.url}>{sectionLink.text}</a>
                </li>
            ))}
        </ul>
    </div>
);

FooterSectionGroup.propTypes = {
    heading: PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }),
    sectionLinks: PropTypes.arrayOf((
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )),
    className: PropTypes.string,
};

/**
 * A section for the footer that contains navigational elements
 *
 * @param  {node}   children         - The inside of this section
 * @param  {string} className        - An additional class, optional
 * @param  {string} ariaLabel        - The aria-label attribute, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const FooterUpper = ({children, className = '', ariaLabel, ...attributeOptions}) => (
    <nav className={`nsw-footer__upper ${className}`} aria-label={ariaLabel} {...attributeOptions}>
        <div className="nsw-container section-links">
            {children}
        </div>
    </nav>
);

FooterUpper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    ariaLabel: PropTypes.string,
};

FooterUpper.defaultProps = {
    ariaLabel: 'footer',
}


/**
 * A section for the footer that sits at the end
 *
 * @param  {node}   children         - The inside of this section
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const FooterLower = ({children, className = '', ...attributeOptions}) => (
    <div className={`nsw-footer__lower ${className}`} {...attributeOptions}>
        {children}
    </div>
);

FooterLower.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};


/**
 * DEFAULT
 * The footer component
 *
 * @param  {node}    children         - The inside of this section
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Footer = ({children, className = '', ...attributeOptions}) => (
    <footer
        className={`nsw-footer ${className}`}
        {...attributeOptions}
        role="contentinfo"
    >
        {children}
    </footer>
);

Footer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
