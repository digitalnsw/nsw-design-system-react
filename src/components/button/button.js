import React from 'react';
import PropTypes from 'prop-types';

/**
 * All different kind of button options
 *
 * @type {Object}
 */
const options = {
  primary: 'nsw-button--primary',
  secondary: 'nsw-button--secondary',
  danger: 'nsw-button--highlight',
  white: 'nsw-button--white',
  fullwidth: 'nsw-button--primary nsw-button--full-width',
};

/**
 * DEFAULT
 * The primary button
 *
 * @param  {string}   linkComponent    - The component used for the link
 * @param  {string}   link             - If this is a link the location it goes
 * @param  {string}   children         - Anything inside
 * @param  {string}   as               - The kind of button, can be either 'primary',
*                                        'secondary', 'tertiary', default: 'primary'
 * @param  {string}   type             - The type attribute, default: 'button', optional
 * @param  {boolean}  block            - The block option, optional
 * @param  {string}   className        - An additional class, optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
const Button = ({
  linkComponent, link, children, as, type, block, className = '', ...attributeOptions
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
        className={`nsw-button ${className} ${options[as]}${block ? ' nsw-button--block' : ''}`}
        {...attributeOptions}
      >
        { children }
      </LinkComponent>
    );
  }

  return (
    <button
      type={type ? 'button' : 'submit'}
      className={`nsw-button ${className} ${options[as]}${block ? ' nsw-button--block' : ''}`}
      {...attributeOptions}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['primary', 'secondary', 'danger', 'white', 'full-width']),
  type: PropTypes.string,
  block: PropTypes.bool,
  linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  as: 'primary',
  linkComponent: 'a',
};

export default Button;
