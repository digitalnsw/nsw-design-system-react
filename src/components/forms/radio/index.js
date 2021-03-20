/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * select functions
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormLabel, FormHelper } from  '../group-elements';
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
export const RadioItem = ({ text, htmlId, value, status, as, uniqueID=nextId(), checked='', ...attributeOptions }) => (
	<>
		<input
			class="nsw-form-radio__input"
			type="radio"
			name={htmlId}

      aria-invalid={ status === "invalid" && as != "group" ?  'true' : '' }
      aria-describedby={ status === "invalid" ?  `helper${htmlId} error${htmlId}` : `helper${htmlId}` }

			id={ uniqueID } { ...checked }></input>
		<label class="nsw-form-radio__label" for={ uniqueID }>{ text }</label>
	</>
);

RadioItem.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	className: PropTypes.string,
	uniqueID: nextId(),
	checked: ''
};


// /**
//  * DEFAULT
//  * The select component
//  *
//  * @param  {boolean} dark             - Add the dark variation class, optional
//  * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
//  * @param  {string}  block            - The block option
//  * @param  {string}  status           - Mark this field as either 'valid' or 'invalid', optional
//  * @param  {string}  className        - An additional class, optional
//  * @param  {object}  attributeOptions - Any other attribute options
//  */
// export const Select = ({ htmlId, dark, options, block, status, className = '', ...attributeOptions }) => {
//
// 	return (
// 		<select className={
// 			`nsw-form-select ${ className }`}
//       aria-invalid={ status === "invalid" ?  'true' : '' }
//       aria-describedby={ status === "invalid" ?  `helper${htmlId} error${htmlId}` : `helper${htmlId}` }
//       id={htmlId}
// 		 { ...attributeOptions }>
// 			{
// 				options.map(
// 					( option, i ) => <SelectItem key={ i } { ...option } />
// 				)
// 			}
// 		</select>
// 	);
// };
//
// Select.propTypes = {
// 	dark: PropTypes.bool,
// 	options: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			value: PropTypes.string.isRequired,
// 			text: PropTypes.string.isRequired,
// 		})
// 	).isRequired,
// 	block: PropTypes.bool,
// 	status: PropTypes.oneOf([ 'valid', 'invalid' ]),
// 	className: PropTypes.string,
// };


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
export const FormGroupRadio = (props) => (
		<div className={`nsw-form-group ${ props.className }`}
		>
			<fieldset class="nsw-form-fieldset" aria-invalid={ props.status === "invalid" ?  'true' : '' }>
				{props.as === 'group'
					? <legend>
						<span class="nsw-form-legend-text">{props.label}</span>
						{props.helper
							? <FormHelper htmlId={props.htmlId}>{props.helper}</FormHelper>
							: ''
						}
						{props.status === "invalid"
							? <FormHelper htmlId={props.htmlId} error>{props.errorText}</FormHelper>
							: ''
						}
					</legend>
					: ''
				}

				<div class="nsw-form-radio">
					{
						props.options.map(
							( option, i ) => <RadioItem key={ i } { ...option } htmlId={props.htmlId} status={props.status} />
						)
					}
				</div>
				{props.status === "invalid" && props.as != 'group'
					? <FormHelper htmlId={props.htmlId} error>{props.errorText}</FormHelper>
					: ''
				}

			</fieldset>
		</div>
);

FormGroupRadio.propTypes = {
	/**
	 * Adds invalid state to form group
	 */
	error: PropTypes.bool,
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};

FormGroupRadio.defaultProps = {
	status: "valid",
	className: '',
  htmlId: nextId(),
	as: "group"
}
