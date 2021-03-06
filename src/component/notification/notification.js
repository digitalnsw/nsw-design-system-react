import React from 'react';
import PropTypes from 'prop-types';

/**
 * All different kind of alerts
 *
 * @type {Object}
 */
const options = {
  info: 'nsw-notification--info',
  warning: 'nsw-notification--warning',
  error: 'nsw-notification--error',
  success: 'nsw-notification--success',
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
export const Notification = ({
  title = '',
  as,
  children,
  className = '',
  ...attributeOptions
}) => (
  <div
    className={`nsw-notification ${className} ${options[as]}`}
    {...attributeOptions}
  >
    <i
      focusable="false"
      className="material-icons nsw-material-icons nsw-notification__icon"
    >
      {icons[as]}
    </i>
    <div className="nsw-notification__content">
      <h4 className="nsw-notification__title">{title}</h4>
      {children}
    </div>
  </div>
);

Notification.propTypes = {
  as: PropTypes.oneOf(['info', 'warning', 'error', 'success']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Notification;
