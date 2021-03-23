
/***************************************************************************************************************************************************************
 *
 * GlobalAlert class
 *
 * A component to display across the top of the entire site to convey important information to the users.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import {initSite} from "nsw-design-system/src/main";

/**
 * All different kind of button options
 *
 * @type {Object}
 */
const options = {
    'critical': 'nsw-sitewide-message--critical',
    'light': 'nsw-sitewide-message--light',
};

export class GlobalAlert extends React.PureComponent {
    /**
     * Constructor
     *
     * @param  {object}  props - The props object
     */
    constructor(props) {
        super(props);

        const {title, content, ctaText, ctaHref, as, className = '', children, ...attributeOptions} = props;
        this.className = className;
        this.attributeOptions = attributeOptions;
    }


    componentDidMount() {
        initSite();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        initSite();
    }

    render() {
        return (
            <div className={ `nsw-sitewide-message ${ this.props.className } ${ options[ this.props.as ]}` }
                 { ...this.attributeOptions }>
                <div className="nsw-sitewide-message__wrapper">
                    <div className="nsw-sitewide-message__content">
                        <h2 className="nsw-sitewide-message__title">
                            {this.props.title}
                        </h2>
                        <p>{this.props.content}</p>
                    </div>
                    {this.props.ctaText && this.props.ctaHref ?
                        <a href={this.props.ctaHref} class="nsw-button">{this.props.ctaText}</a> :
                        <button type="button" className="nsw-button">{this.props.ctaText}</button>}
                    <button type="button" className="nsw-sitewide-message__close">
                        <i className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">close</i>
                        <span className="sr-only">Close message</span>
                    </button>
                </div>
            </div>
        );
    }
};

GlobalAlert.propTypes = {
    /**
     * Heading of the alert
     */
    title: PropTypes.string.isRequired,
    /**
     /**
     * Content of the global alert
     */
    content: PropTypes.string.isRequired,
    /**
     /**
     * The text of a call to action
     */
    ctaText: PropTypes.string,
    /**
     /**
     * The text of a call to action
     */
    ctaHref: PropTypes.string,
    /**
     * Additional class name
     */
    className: PropTypes.string,
    /**
     * - The kind of button, can be either 'default, critical, light'
     */
    as: PropTypes.string,
};

export default GlobalAlert;
