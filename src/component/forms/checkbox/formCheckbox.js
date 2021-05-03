import React from 'react';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';
import { FormHelper } from '../group-elements';

/**
 * An item inside the Select component
 *
 * @param  {string}   text             - The text of this option
 * @param  {string}   value            - The value of this option
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const CheckboxItem = ({
  text, htmlId, value, status, as, uniqueID = nextId(), ...attributeOptions
}) => (
  <React.Fragment>
    <input
      className="nsw-form-checkbox__input"
      type="checkbox"
      name={htmlId}
      aria-invalid={(status === 'invalid' && !(as === 'group')) ? 'true' : ''}
      aria-describedby={status === 'invalid' ? `helper${htmlId} error${htmlId}` : `helper${htmlId}`}
      id={uniqueID}
      {...attributeOptions}
    />
    <label className="nsw-form-checkbox__label" htmlFor={uniqueID}>{ text }</label>
  </React.Fragment>
);

CheckboxItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  htmlId: PropTypes.string,
  uniqueID: PropTypes.func,
  status: PropTypes.oneOf(['valid', 'invalid']),
  as: PropTypes.string,
};

/**
 * The checkbox group component
 *
 * @param  {string}  status           - Adds invalid state to form group
 * @param  {string}  errorText        - Text for error message
 * @param  {string}  htmlId           - Unique ID for this checkbox group
 * @param  {string}  label            - Text for label
 * @param  {string}  helper           - Text for helper
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const FormGroupCheckbox = ({
  className, as, status, label, options, htmlId, errorText, helper,
}) => (
  <div className={`nsw-form-group ${className}`}>
    <fieldset className="nsw-form-fieldset" aria-invalid={status === 'invalid' ? 'true' : ''}>
      {as === 'group' ? (
        <legend>
          <span className="nsw-form-legend-text">{label}</span>
          {helper ? <FormHelper htmlId={htmlId}>{helper}</FormHelper> : ''}
          {status === 'invalid' ? <FormHelper htmlId={htmlId} error>{errorText}</FormHelper> : ''}
        </legend>
      ) : ''}

      <div className="nsw-form-checkbox">
        {
          options.map(
            (option) => (
              <CheckboxItem
                key={option.value}
                {...option}
                as={as}
                htmlId={htmlId}
                status={status}
              />
            ),
          )
        }
      </div>
      {status === 'invalid' && as !== 'group' ? <FormHelper htmlId={htmlId} error>{errorText}</FormHelper> : ''}

    </fieldset>
  </div>
);

FormGroupCheckbox.propTypes = {
  status: PropTypes.oneOf(['valid', 'invalid']),
  errorText: PropTypes.string,
  htmlId: PropTypes.string,
  label: PropTypes.string,
  as: PropTypes.oneOf(['group', false]),
  helper: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  className: PropTypes.string,
};

FormGroupCheckbox.defaultProps = {
  status: 'valid',
  className: '',
  htmlId: nextId(),
};
