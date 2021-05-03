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
 * @param  {boolean} error         - Whether this helper is an error
 */

export const FormHelper = ({
  htmlId, children, className, error, ...attributeOptions
}) => (

  <span id={`${error ? 'error' : 'helper'}${htmlId}`} className={`nsw-form-helper ${error ? ' nsw-form-helper--error' : ''} ${className}`} {...attributeOptions}>{children}</span>

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
    className={`nsw-form-label ${className}`}
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
 * @param  {string}  errorText        - Text for error message
 * @param  {string}  label            - Text for label
 * @param  {string}  helper           - Text for helper
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const FormGroup = ({
  htmlId = nextId(), status, children, label, helper, errorText, error,
  className, ...attributeOptions
}) => (

  <div
    className={`nsw-form-group ${className}`}
    {...attributeOptions}
  >
    <FormLabel htmlFor={htmlId} text={label} />
    {helper
      ? <FormHelper htmlId={htmlId}>{helper}</FormHelper>
      : ''}
    {React.Children.map(children, (child) => React.cloneElement(child, { error }))}
    {status === 'invalid'
      ? <FormHelper htmlId={htmlId} error>{errorText}</FormHelper>
      : ''}
  </div>
);

FormGroup.propTypes = {
  status: PropTypes.oneOf(['invalid', 'valid']),
  error: PropTypes.bool,
  className: PropTypes.string,
  htmlId: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  helper: PropTypes.string,
  errorText: PropTypes.string,
  uniqueID: PropTypes.func,
};

FormGroup.defaultProps = {
  status: 'valid',
  className: '',
};
