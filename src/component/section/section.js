import React from 'react';
import PropTypes from 'prop-types';

/**
 * All different kind of alerts
 *
 * @type {Object}
 */
const options = {
  full: '',
  half: 'nsw-section--half-padding',
  none: 'nsw-section--no-padding',
};

/**
 * Docs gen
 * Page alert
 *
 * @param  {boolean} style            - Theme (default = white)
 * @param  {string}  padding          - Padding style
 * @param  {boolean} container        - Whether to wrap children in nsw-container
 * @param  {node}    children         - Anything inside the component
 * @param  {string}  className        - An additional class, optional
 * @param  {boolean}  box             - Whether the section is inline
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Section = ({
  children,
  style,
  container,
  padding,
  box,
  className = '',
  ...attributeOptions
}) => (
  <div
    className={`nsw-section ${className} ${options[padding]} nsw-section--${style} ${ box ? 'nsw-section--box' : ''}`}
    {...attributeOptions}
  >

      <div className={container ? 'nsw-container' : ''}>
      {children}
      </div>

  </div>
);

Section.propTypes = {
  padding: PropTypes.oneOf(['full', 'half', 'none']),
  style: PropTypes.oneOf(['white', 'brand-dark', 'brand-light', 'brand-supplementary', 'black', 'off-white', 'grey-01', 'grey-02', 'grey-03', 'grey-04']),
  children: PropTypes.node.isRequired,
  container: PropTypes.bool,
  className: PropTypes.string,
  box: PropTypes.bool,
};
Section.defaultProps = {
  padding: 'full',
  style: 'white',
  children: null,
  container: true,
  box: false,
};
export default Section;
