import React from 'react';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';
import { FormHelper } from '../group-elements';

/**
 * An item inside the Radio component
 *
 * @param  {string}   text             - The text of this option
 * @param  {string}   value            - The value of this option
 * @param  {string}  status            - Mark this field as either 'valid' or 'invalid', optional
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const RadioItem = ({
  text, htmlId, value, status, uniqueID = nextId(), ...attributeOptions
}) => (
  <React.Fragment>
    <input
      className="nsw-form-radio__input"
      type="radio"
      name={htmlId}
      aria-describedby={status === 'invalid' ? `helper${htmlId} error${htmlId}` : `helper${htmlId}`}
      id={uniqueID}
      {...attributeOptions}
    />
    <label className="nsw-form-radio__label" htmlFor={uniqueID}>{text}</label>
  </React.Fragment>
);

RadioItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  htmlId: PropTypes.string,
  status: PropTypes.oneOf(['valid', 'invalid']),
  as: PropTypes.string,
  uniqueID: PropTypes.func,
};

/**
 * The Form group radio component
 *
 * @param  {string}  status           - Adds invalid state to form group
 * @param  {string}  errorText        - Text for error message
 * @param  {string}  label            - Text for label
 * @param  {string}  helper           - Text for helper
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const FormGroupRadio = ({
  className, as, label, helper, status, htmlId, errorText, options,
}) => (
  <div className={`nsw-form-group ${className}`}>
    <fieldset className="nsw-form-fieldset" aria-invalid={status === 'invalid' ? 'true' : ''}>
      {as === 'group'
        ? (
          <legend>
            <span className="nsw-form-legend-text">{label}</span>
            {helper
              ? <FormHelper htmlId={htmlId}>{helper}</FormHelper>
              : ''}
            {status === 'invalid'
              ? <FormHelper htmlId={htmlId} error>{errorText}</FormHelper>
              : ''}
          </legend>
        )
        : ''}

      <div className="nsw-form-radio">
        {
          options.map(
            (option) => (
              <RadioItem
                key={option.value}
                {...option}
                htmlId={htmlId}
                status={status}
              />
            ),
          )
        }
      </div>
      {status === 'invalid' && as !== 'group'
        ? <FormHelper htmlId={htmlId} error>{errorText}</FormHelper>
        : ''}

    </fieldset>
  </div>
);

FormGroupRadio.propTypes = {
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

FormGroupRadio.defaultProps = {
  status: 'valid',
  className: '',
  htmlId: nextId(),
  as: 'group',
};
