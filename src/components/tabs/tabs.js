
/***************************************************************************************************************************************************************
 *
 * Tab class
 *
 * A component to split long content into manageable chunks to avoid overwhelming the user.
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import { initSite } from "nsw-design-system/src/main.js";


export class Tabs extends React.PureComponent {
    /**
     * Constructor
     * Create state and iterate over a unique ID
     *
     * @param  {object}  props - The props object
     */
    constructor(props) {
        super(props);

        const {className = '', children, ...attributeOptions} = props;

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
            <div className={`nsw-tabs js-tabs ${this.className}`} {...this.attributeOptions}>
                {this.props.children}
            </div>
        );
    }
};

Tabs.propTypes = {
    /**
  	 * Additional class name
  	*/
    className: PropTypes.string,
};

export const TabItems = ({children}) => (
    <ul className="nsw-tabs__list">
        {children}
    </ul>
);

export const TabItem = ({urlHash, title}) => (
    <li class="nsw-tabs__list-item">
        <a href={`#${urlHash}`} className="nsw-tabs__link">{title}</a>
    </li>
);

TabItem.propTypes = {
    /**
     * Id anchor
     */
    urlHash: PropTypes.string.isRequired,
    /**
     * Title of the tab
     */
    title: PropTypes.string.isRequired
}

export const TabSection = ({urlHash, children}) => (
    <section id={urlHash} className="nsw-tabs__content">
        {children}
    </section>
);

TabSection.propTypes = {
    /**
     * Id anchor
     */
    urlHash: PropTypes.string.isRequired,
    /**
     * Content of the tab
     */
    children: PropTypes.string.isRequired,
}

export default Tabs;
