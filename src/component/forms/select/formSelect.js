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
export const SelectItem = ({
  text, value,
}) => (
  <option value={value}>{ text }</option>
);

SelectItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

/**
 * DEFAULT
 * The select component
 *
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  block            - The block option
 * @param  {string}  status           - Mark this field as either 'valid' or 'invalid', optional
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  selected         - Option value of the selected item
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Select = ({
  htmlId, selected, options, block, status, className = '', ...attributeOptions
}) => (
  <select
    className={`nsw-form__select ${className}`}
    aria-invalid={status === 'invalid' ? 'true' : ''}
    aria-describedby={status === 'invalid' ? `helper${htmlId} error${htmlId}` : `helper${htmlId}`}
    id={htmlId}
    defaultValue={selected}
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
  status: PropTypes.oneOf(['valid', 'invalid', 'default']),
  selected: PropTypes.string,
  className: PropTypes.string,
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
export const FormGroupSelect = ({
  status, selected, statusText, label, helper, options, htmlId,
}) => (
  <FormGroup status={status} statusText={statusText} label={label} helper={helper} htmlId={htmlId}>
    <Select options={options} selected={selected} />
  </FormGroup>
);

FormGroupSelect.propTypes = {
  status: PropTypes.oneOf(['valid', 'invalid', 'default']),
  statusText: PropTypes.string,
  label: PropTypes.string,
  helper: PropTypes.string,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  htmlId: PropTypes.string,
};

FormGroupSelect.defaultProps = {
  status: 'default',
  htmlId: defHtmlId,
};
