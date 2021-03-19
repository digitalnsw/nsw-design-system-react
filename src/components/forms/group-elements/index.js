/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * form functions
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import nextId from "react-id-generator";

const defHtmlId = nextId();

// The following line will be replaced automatically with generic imports for the ES5 pipeline.
// You can safely ignore this bit if you use this module with pancake
//
// [replace-imports]

/**
 * DEFAULT
 * The FormHelper component
 *
 * @param  {string}  children      - Message and children contained
 * @param  {string}  id            - uniqueId of the field reffered to by the helper
 * @param  {boolean} error         - Whether this helper is an error
 */

export const FormHelper = ( { htmlId, children, className, error, ...attributeOptions } ) => (

      <span id={`${ error ? `error` : `helper` }${htmlId}`} className={`nsw-form-helper ${ error ? ` nsw-form-helper--error` : '' } ${ className }`}>{children}</span>

);

FormHelper.defaultProps = {
  htmlId: defHtmlId
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
export const FormLabel = ( { text, dark, inline, className, ...attributeOptions } ) => (
	<label className={`nsw-form-label ${ className }`}
		{ ...attributeOptions }
	>
    { text }
	</label>
);

FormLabel.propTypes = {
	/**
	 * Text of the label, required
	 */
	text: PropTypes.string.isRequired,
	/**
	 * Add the dark variation class, optional
	 */
	dark: PropTypes.bool,
	/**
	 * Display the label inline, optional
	 */
	inline: PropTypes.bool,
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};


FormLabel.defaultProps = {
	className: ''
}

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
export const FormGroup = ( { htmlId = nextId(), status, children, label, helper, errorText, error, options, className, ...attributeOptions } ) => (

    <div className={`nsw-form-group ${ className }`}
  		{ ...attributeOptions }
  	>
      <FormLabel htmlFor={htmlId} text={label} />
      {helper
        ? <FormHelper htmlId={htmlId}>{helper}</FormHelper>
        : ''
      }
      {React.Children.map(children, child => {
          return React.cloneElement(child, { error })
       })}
      {status === "invalid"
        ? <FormHelper htmlId={htmlId} error>{errorText}</FormHelper>
        : ''
      }
    </div>
);


FormGroup.propTypes = {
	/**
	 * Adds invalid state to form group
	 */
	error: PropTypes.bool,
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};

FormGroup.defaultProps = {
	status: "valid",
	className: ''
}
