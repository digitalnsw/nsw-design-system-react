import React from 'react';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';

const defHtmlId = nextId();

/**
 * DEFAULT
 * The FormHelper component
 *
 * @param  {string}  children      - Message and children contained
 * @param  {string}  id            - uniqueId of the field reffered to by the helper
 * @param  {boolean} status         - Whether this helper is an error
 */

export const FormHelper = ({
  htmlId, children, className, status, ...attributeOptions
}) => (

  <span id={`${status === 'invalid' ? 'error' : 'helper'}${htmlId}`} className={`nsw-form__helper ${status === 'invalid' ? ' nsw-form__helper--error' : ''} ${status === 'valid' ? ' nsw-form__helper--valid' : ''} ${className}`} {...attributeOptions}>
    <span className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">
      {status === 'invalid' ? 'cancel' : ''}
      {status === 'valid' ? 'check_circle' : ''}
    </span>
    {children}
  </span>

);

FormHelper.propTypes = {
  htmlId: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.bool,
};

FormHelper.defaultProps = {
  htmlId: defHtmlId,
};

/**
 * The label component
 *
 * @param  {string}  text            - Text of the label, required
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {boolean} inline           - Display the label inline, optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const FormLabel = ({
  htmlFor, text, dark, inline, className, ...attributeOptions
}) => (
  <label
    htmlFor={htmlFor}
    className={`nsw-form__label ${className}`}
    {...attributeOptions}
  >
    { text }
  </label>
);

FormLabel.propTypes = {
  text: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  inline: PropTypes.bool,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};

FormLabel.defaultProps = {
  className: '',
};

/**
 * The form group component
 *
 * @param  {string}  status           - Adds invalid state to form group
 * @param  {boolean} error            - Whether the field is in error
 * @param  {string}  statusText        - Text for error message
 * @param  {string}  label            - Text for label
 * @param  {string}  helper           - Text for helper
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const FormGroup = ({
  htmlId = nextId(), status, children, label, helper, statusText, error,
  className, ...attributeOptions
}) => (

  <div
    className={`nsw-form__group ${className}`}
    {...attributeOptions}
  >
    <FormLabel htmlFor={htmlId} text={label} />
    {helper
      ? <FormHelper htmlId={htmlId}>{helper}</FormHelper>
      : ''}
    {React.Children.map(children, (child) => React.cloneElement(child, { error }))}
    {status
      ? <FormHelper htmlId={htmlId} status={status}>{statusText}</FormHelper>
      : ''}
  </div>
);

FormGroup.propTypes = {
  status: PropTypes.oneOf(['invalid', 'valid', 'default']),
  error: PropTypes.bool,
  className: PropTypes.string,
  htmlId: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  helper: PropTypes.string,
  statusText: PropTypes.string,
  uniqueID: PropTypes.func,
};

FormGroup.defaultProps = {
  status: 'default',
  className: '',
};
