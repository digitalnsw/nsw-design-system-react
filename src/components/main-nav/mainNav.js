/***************************************************************************************************************************************************************
 *
 * Main navigation function
 *
 **************************************************************************************************************************************************************/

import React from "react";
import PropTypes from "prop-types";
import {initSite} from "nsw-design-system/src/main";

/**
 * Docs gen
 * Main Nav
 *
 * @param  {array}   navItems         - Array of navigation item objects, format { link: '', text: '' }
 * @param  {boolean} megamenu          - Display menu as mega menu
 * @param  {string}  className        - An additional class, optional
 */

export class MainNav extends React.PureComponent {
    /**
     * Constructor
     * Create state and iterate over a unique ID
     *
     * @param  {object}  props - The props object
     */
    constructor(props) {
        super(props);

        const {navItems, className = '', children, ...attributeOptions} = props;

    }


    componentDidMount() {
        initSite();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        initSite();
    }

    render() {
        return (
            <nav id="main-navigation" className="nsw-navigation js-open-navigation" aria-label="true">
                <div className="nsw-navigation__header">
                    <h2 id="nsw-navigation">Menu</h2>
                    <button type="button" className="nsw-navigation__close js-close-navigation" aria-expanded="true">
                        <i className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">close</i>
                        <span className="sr-only">Close Menu</span>
                    </button>
                </div>
                <ul className="nsw-navigation__list">
                    {
                        this.props.navItems.map(
                            (navItem) => (
                                <li className="nsw-navigation__list-item">
                                    <a href={navItem.url} className="nsw-navigation__link">
                                        <span className="nsw-navigation__link-text">{navItem.text}</span>
                                    </a>
                                </li>
                            )
                        )
                    }
                </ul>
            </nav>
        );
    }
};


MainNav.propTypes = {
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired
}