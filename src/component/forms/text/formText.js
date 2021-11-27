import React from 'react';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';
import { FormGroup } from '../group-elements';

/**
 * DEFAULT
 * The TextInput component
 *
 * @param  {string}  as               - The kind of input, can be either 'input'
 *                                      or 'textarea', default: 'input'
 * @param  {string}  status           - 'invalid' if the field is in error
 * @param  {boolean} block            - Add the block variation class, optional
 * @param  {boolean} number           - Add the number variation class, optional
 * @param  {string}  htmlId           - The unique ID for this field to match label and error
 * @param  {string}  type             - The type of the field, optional, default: text
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const TextInput = ({
  as, status, block, number, htmlId, type = 'text', className = '', ...attributeOptions
}) => (
  as === 'textarea'
    ? (
      <textarea
        className={
                `nsw-form__input ${className}`
                + `${block ? ' nsw-form__input--block' : ''}`
                + `${number ? ' nsw-form__input--number' : ''}`
            }
        aria-invalid={status === 'invalid' ? 'true' : 'false'}
        aria-describedby={status === 'invalid' ? `helper${htmlId} error${htmlId}` : `helper${htmlId}`}
        id={htmlId}
        {...attributeOptions}
      />
    )
    : (
      <input
        className={
            `nsw-form__input ${className}`
            + `${block ? ' nsw-form__input--block' : ''}`
            + `${number ? ' nsw-form__input--number' : ''}`
        }
        aria-invalid={status === 'invalid' ? 'true' : 'false'}
        aria-describedby={status === 'invalid' ? `helper${htmlId} error${htmlId}` : `helper${htmlId}`}
        type={type}
        {...attributeOptions}
        id={htmlId}
      />
    )
);

TextInput.propTypes = {
  as: PropTypes.oneOf(['input', 'text', 'textarea']),
  block: PropTypes.bool,
  number: PropTypes.bool,
  className: PropTypes.string,
  htmlId: PropTypes.string,
  status: PropTypes.oneOf(['valid', 'invalid','default']),
  type: PropTypes.string,
};

TextInput.defaultProps = {
  as: 'input',
  htmlId: 0,
};

/**
 * The text group component
 *
 * @param  {string}  status           - Adds invalid state to form group
 * @param  {string}  statusText        - Text for error message
 * @param  {string}  label            - Text for label
 * @param  {string}  helper           - Text for helper
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const FormGroupText = ({
  status, className, inputType, as, statusText, label, helper, htmlId, ...attributeOptions
}) => (
  <FormGroup status={status} as={as} statusText={statusText} label={label} helper={helper} htmlId={htmlId}>
    <TextInput status={status} htmlId={htmlId} {...attributeOptions} type={inputType} />
  </FormGroup>
);

FormGroupText.propTypes = {
  status: PropTypes.oneOf(['valid', 'invalid', 'default']),
  className: PropTypes.string,
  as: PropTypes.oneOf(['input', 'textarea']),
  statusText: PropTypes.string,
  label: PropTypes.string,
  helper: PropTypes.string,
  htmlId: PropTypes.string,
  inputType: PropTypes.string,
};

FormGroupText.defaultProps = {
  status: 'default',
  className: '',
  htmlId: nextId(),
};
