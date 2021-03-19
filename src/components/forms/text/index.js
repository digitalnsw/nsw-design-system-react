/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * form functions
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import nextId from "react-id-generator";
import { FormGroup } from  '../group-elements';

// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/***************************************************************************************************************************************************************
 *
 * text-input function
 *
 * Text inputs include text inputs, labels, hints and textareas. They allow users to input data into a field.
 *
 **************************************************************************************************************************************************************/

/**
 * DEFAULT
 * The TextInput component
 *
 * @param  {string}  as               - The kind of input, can be either 'input' or 'textarea', default: 'input'
 * @param  {boolean} block            - Add the block variation class, optional
 * @param  {string}  htmlId           - The unique ID for this field to match label and error
 * @param  {string}  status           - 'invalid' if the field is in error
 * @param  {string}  type             - The type of the field, optional, default: text
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const TextInput = ({ as, status, htmlId, block, number, error, type = 'text', className = '', ...attributeOptions }) => (
	as === 'textarea'
		? <textarea
				className={
					`nsw-form-input ${ className }` +
					`${ block ? ' nsw-form-input--block' : '' }` +
					`${ number ? ' nsw-form-input--number' : '' }`
				}
        aria-invalid={ status === "invalid" ?  'true' : '' }
        aria-describedby={ status === "invalid" ?  `helper${htmlId} error${htmlId}` : `helper${htmlId}` }
        id={htmlId}
				{ ...attributeOptions } >
			</textarea>
		: <input className={
					`nsw-form-input ${ className }` +
					`${ block ? ' nsw-form-input--block' : '' }` +
					`${ number ? ' nsw-form-input--number' : '' }`
				}
        aria-invalid={ status === "invalid" ?  'true' : '' }
        aria-describedby={ status === "invalid" ?  `helper${htmlId} error${htmlId}` : `helper${htmlId}` }
				type={ type } { ...attributeOptions }
        id={htmlId}
			/>
);

TextInput.propTypes = {
  as: PropTypes.oneOf([ 'input', 'textarea' ]),
	block: PropTypes.bool,
	className: PropTypes.string
};

TextInput.defaultProps = {
	as: 'input',
  htmlId: 0
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
export const FormGroupText = (props) => (
  <FormGroup {...props}>
    <TextInput {...props} />
  </FormGroup>
);

FormGroupText.propTypes = {
	/**
	 * Adds invalid state to form group
	 */
	error: PropTypes.bool,
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};

FormGroupText.defaultProps = {
	status: "valid",
	className: '',
  htmlId: nextId()
}
