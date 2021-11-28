import React from 'react';
import PropTypes from 'prop-types';

/**
 * All different kind of button options
 *
 * @type {Object}
 */

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}   linkComponent    - The component used for the link
 * @param  {string}   link             - If this is a link the location it goes
 * @param  {string}   children         - Anything inside
 * @param  {string}   style            - The button style
 * @param  {string}   type             - The type attribute, default: 'button', optional
 * @param  {boolean}  block            - The block option, optional
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const Button = ({
  linkComponent, link, children, style, type, block, className = '', ...attributeOptions
}) => {
  if (link) {
    const LinkComponent = linkComponent;

    // If we are using a normal link
    if (LinkComponent === 'a') {
      attributeOptions.href = link;
      // If we are using a link component
    } else if (typeof LinkComponent === 'function') {
      attributeOptions.to = link;
    }

    return (
      <LinkComponent
        className={`nsw-button ${className} nsw-button--${style}${block ? ' nsw-button--block' : ''}`}
        {...attributeOptions}
      >
        { children }
      </LinkComponent>
    );
  }

  return (
    <button
      type={ type }
      className={`nsw-button ${className} nsw-button--${style}${block ? ' nsw-button--block' : ''}`}
      {...attributeOptions}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOf(['dark', 'dark-outline', 'dark-outline-solid', 'light', 'light-outline','white','danger']),
  type: PropTypes.string,
  block: PropTypes.bool,
  linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  style: 'dark',
  linkComponent: 'a',
};

export default Button;
