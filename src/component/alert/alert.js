import React from 'react';
import PropTypes from 'prop-types';

/**
 * All different kind of alerts
 *
 * @type {Object}
 */
const options = {
  info: 'nsw-in-page-alert--info',
  warning: 'nsw-in-page-alert--warning',
  error: 'nsw-in-page-alert--error',
  success: 'nsw-in-page-alert--success',
};

/**
 * All different kind of alert icons
 *
 * @type {Object}
 */
const icons = {
  info: 'info',
  warning: 'cancel',
  error: 'error',
  success: 'check_circle',
};

/**
 * Docs gen
 * Page alert
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {string}  as               - What kind of alert this is
 * @param  {node}    children         - Anything inside the component
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Alert = ({
  title = '',
  as,
  children,
  className = '',
  ...attributeOptions
}) => (
  <div
    className={`nsw-in-page-alert ${className} ${options[as]}`}
    {...attributeOptions}
  >
    <span
      focusable="false"
      className="material-icons nsw-material-icons nsw-in-page-alert__icon"
    >
      {icons[as]}
    </span>
    <div className="nsw-in-page-alert__content">
      <h4>{title}</h4>
      {children}
    </div>
  </div>
);

Alert.propTypes = {
  as: PropTypes.oneOf(['info', 'warning', 'error', 'success']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Alert;
