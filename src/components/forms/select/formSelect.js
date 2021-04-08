import React from 'react';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';
import { FormGroup } from '../group-elements';

const defHtmlId = nextId();

/**
 * An item inside the Select component
 *
 * @param  {string}   text             - The text of this option
 * @param  {string}   value            - The value of this option
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const SelectItem = ({ text, value, ...attributeOptions }) => (
  <option value={value} {...attributeOptions}>{ text }</option>
);

SelectItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

/**
 * DEFAULT
 * The select component
 *
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  block            - The block option
 * @param  {string}  status           - Mark this field as either 'valid' or 'invalid', optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Select = ({
  htmlId, options, block, status, className = '', ...attributeOptions
}) => (
  <select
    className={`nsw-form-select ${className}`}
    aria-invalid={status === 'invalid' ? 'true' : ''}
    aria-describedby={status === 'invalid' ? `helper${htmlId} error${htmlId}` : `helper${htmlId}`}
    id={htmlId}
    {...attributeOptions}
  >
    {
          options.map(
            (option) => <SelectItem key={option.value} {...option} />,
          )
      }
  </select>
);

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  block: PropTypes.bool,
  htmlId: PropTypes.string,
  status: PropTypes.oneOf([false, 'invalid']),
  className: PropTypes.string,
};

/**
 * The text group component
 *
 * @param  {string}  status           - Adds invalid state to form group
 * @param  {string}  errorText        - Text for error message
 * @param  {string}  label            - Text for label
 * @param  {string}  helper           - Text for helper
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const FormGroupSelect = (props) => (
  <FormGroup {...props}>
    <Select {...props} />
  </FormGroup>
);

FormGroupSelect.propTypes = {
  status: PropTypes.oneOf(['invalid', false]),
  errorText: PropTypes.string,
  label: PropTypes.string,

  helper: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      selected: PropTypes.oneOf(['selected', false]),
    }),
  ).isRequired,
  className: PropTypes.string,
  htmlId: PropTypes.string,
  as: PropTypes.bool,
};

FormGroupSelect.defaultProps = {
  status: false,
  className: '',
  as: false,
  htmlId: defHtmlId,
};
