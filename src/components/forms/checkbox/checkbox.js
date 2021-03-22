
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
export const CheckboxItem = ({ text, htmlId, value, status, as, uniqueID=nextId(), checked='', ...attributeOptions }) => (
	<>
		<input
			class="nsw-form-checkbox__input"
			type="checkbox"
			name={htmlId}

      aria-invalid={ (status === "invalid" && !(as == "group")) ?  'true' : '' }
      aria-describedby={ status === "invalid" ?  `helper${htmlId} error${htmlId}` : `helper${htmlId}` }

			id={ uniqueID } { ...checked }></input>
		<label class="nsw-form-checkbox__label" for={ uniqueID }>{ text }</label>
	</>
);

CheckboxItem.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	className: PropTypes.string,
	uniqueID: nextId(),
	checked: ''
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
export const FormGroupCheckbox = (props) => (
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

				<div class="nsw-form-checkbox">
					{
						props.options.map(
							( option, i ) => <CheckboxItem key={ i } { ...option } as={props.as} htmlId={props.htmlId} status={props.status} />
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

FormGroupCheckbox.propTypes = {
	/**
	 * Adds invalid state to checkbox / group
	 */
	status: PropTypes.oneOf([ 'invalid', false ]),
	/**
	 * Text to show if field is in error state (ignored otherwise)
	 */
	errorText: PropTypes.string,
	/**
	 * Unique ID for the checkbox / group
	 */
	htmlId: PropTypes.string,
	/**
	 * Legend title for group (where `as` is 'group')
	 */
	 label: PropTypes.string,
 	/**
 	 * Set to group for group of checkboxes with legend
 	 */
	 as: PropTypes.oneOf([ 'group', false ]),
 	/**
 	 * Helper text for the field
 	 */
	helper: PropTypes.string,
	/**
	 * Schema for checkboxes
	 */
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			text: PropTypes.string,
		})
	).isRequired,
	/**
	 * An additional class, optional
	 */
	className: PropTypes.string,
};

FormGroupCheckbox.defaultProps = {
	status: false,
	className: '',
  htmlId: nextId()
}
