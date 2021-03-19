/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * select functions
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from  '../group-elements';
import nextId from "react-id-generator";
const defHtmlId = nextId();

// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]


/**
 * An item inside the Select component
 *
 * @param  {string}   text             - The text of this option
 * @param  {string}   value            - The value of this option
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const SelectItem = ({ text, value, ...attributeOptions }) => (
	<option value={ value } { ...attributeOptions }>{ text }</option>
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
 * @param  {boolean} dark             - Add the dark variation class, optional
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  block            - The block option
 * @param  {string}  status           - Mark this field as either 'valid' or 'invalid', optional
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Select = ({ htmlId, dark, options, block, status, className = '', ...attributeOptions }) => {

	return (
		<select className={
			`nsw-form-select ${ className }`}
      aria-invalid={ status === "invalid" ?  'true' : '' }
      aria-describedby={ status === "invalid" ?  `helper${htmlId} error${htmlId}` : `helper${htmlId}` }
      id={htmlId}
		 { ...attributeOptions }>
			{
				options.map(
					( option, i ) => <SelectItem key={ i } { ...option } />
				)
			}
		</select>
	);
};

Select.propTypes = {
	dark: PropTypes.bool,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		})
	).isRequired,
	block: PropTypes.bool,
	status: PropTypes.oneOf([ 'valid', 'invalid' ]),
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
	/**
	 * Adds invalid state to form group
	 */
	error: PropTypes.bool,
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};

FormGroupSelect.defaultProps = {
	status: "valid",
	className: '',
  htmlId: defHtmlId
}
