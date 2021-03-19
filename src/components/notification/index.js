/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * Page alert function
 *
 * Use page alert to notify and alert users of important application events.
 *
 **************************************************************************************************************************************************************/

import React from "react";
import PropTypes from "prop-types";

// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/**
 * All different kind of alerts
 *
 * @type {Object}
 */
const options = {
  info: "nsw-notification--info",
  warning: "nsw-notification--warning",
  error: "nsw-notification--error",
  success: "nsw-notification--success"
};

const icons = {
  info: "info",
  warning: "cancel",
  error: "error",
  success: "check_circle"
};

/**
 * DEFAULT
 * Page alert
 *
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} alt              - Add the alt variation class, optional
 * @param  {string}  as               - What kind of alert this is, takes: 'info', 'warning', 'error', 'success'
 * @param  {node}    children         - Anything inside the component
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
const NSWnotification = ({
  title = "",
  as,
  alt,
  dark,
  children,
  className = "",
  ...attributeOptions
}) => (
  <div
    className={`nsw-notification ${className} ${
      dark ? " nsw-notification--dark au-body--dark" : ""
    }${alt ? " nsw-notification--alt au-body--alt" : ""} ${options[as]}`}
    {...attributeOptions}
  >
    <i
      focusable="false"
      className="material-icons nsw-material-icons nsw-notification__icon"
    >
      {icons[as]}
    </i>
    <div class="nsw-notification__content">
      <h4 class="nsw-notification__title">{title}</h4>
      {children}
    </div>
  </div>
);

NSWnotification.propTypes = {
  as: PropTypes.oneOf(["info", "warning", "error", "success"]).isRequired,
  alt: PropTypes.bool,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default NSWnotification;
