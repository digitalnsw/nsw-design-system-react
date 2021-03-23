/***************************************************************************************************************************************************************
 *
 * select functions
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { FormHelper } from '../group-elements';
import nextId from "react-id-generator";

/**
 * An item inside the Select component
 *
 * @param  {string}   text             - The text of this option
 * @param  {string}   value            - The value of this option
 * @param  {object}   attributeOptions - Any other attribute options
 */
export const RadioItem = ({text, htmlId, value, status, as, uniqueID = nextId(), checked = '', ...attributeOptions}) => (
    <>
        <input
            class="nsw-form-radio__input"
            type="radio"
            name={htmlId}

            aria-invalid={status === "invalid" && as != "group" ? 'true' : ''}
            aria-describedby={status === "invalid" ? `helper${htmlId} error${htmlId}` : `helper${htmlId}`}

            id={uniqueID} {...checked}></input>
        <label class="nsw-form-radio__label" for={uniqueID}>{text}</label>
    </>
);

RadioItem.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    uniqueID: nextId(),
    checked: ''
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
export const FormGroupRadio = (props) => (
    <div className={`nsw-form-group ${props.className}`}
    >
        <fieldset class="nsw-form-fieldset" aria-invalid={props.status === "invalid" ? 'true' : ''}>
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
                        (option, i) => <RadioItem key={i} {...option} htmlId={props.htmlId} status={props.status}/>
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
     * Adds invalid state to checkbox / group
     */
    status: PropTypes.oneOf(['invalid', false]),
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
    as: PropTypes.oneOf(['group', false]),
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

FormGroupRadio.defaultProps = {
    status: false,
    className: '',
    htmlId: nextId(),
    as: "group"
}
