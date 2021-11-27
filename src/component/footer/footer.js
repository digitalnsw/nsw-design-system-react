import React from 'react';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';

/**
 * A section for the footer that sits at the end
 *
 * @param  {node}   children         - The inside of this section
 * @param  {array}  footerLinks     - The section links, format: { url: '', text: '' }
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const FooterLinks = ({ footerLinks, className = '', ...attributeOptions }) => (
  <ul className={className} {...attributeOptions}>
    {footerLinks.map((footerLink) => (
      <li key={nextId()}>
        <a href={footerLink.url}>{footerLink.text}</a>
      </li>
    ))}
  </ul>
);

FooterLinks.propTypes = {
  footerLinks: PropTypes.arrayOf((
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
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
export const FooterSectionGroup = ({
  heading, sectionLinks, className = '', ...attributeOptions
}) => (
  <div className={`nsw-footer__group ${className}`} {...attributeOptions}>
    <h3 className="nsw-footer__heading"><a href={heading.url}>{heading.text}</a></h3>
    <ul className="nsw-footer__list">
      {sectionLinks.map((sectionLink) => (
        <li key={nextId()}>
          <a href={sectionLink.url}>{sectionLink.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

FooterSectionGroup.propTypes = {
  heading: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  sectionLinks: PropTypes.arrayOf((
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
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
export const FooterUpper = ({
  children, className = '', ariaLabel, ...attributeOptions
}) => (
  <nav className={`nsw-footer__upper ${className}`} aria-label={ariaLabel} {...attributeOptions}>
    <div className="nsw-container">
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
};

/**
 * A section for the footer that sits at the end
 *
 * @param  {node}   children         - The inside of this section
 * @param  {string} className        - An additional class, optional
 * @param  {object} attributeOptions - Any other attribute options
 */
export const FooterLower = ({ children, className = '', ...attributeOptions }) => (
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
const Footer = ({ children, className = '', ...attributeOptions }) => (
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

export default Footer;
