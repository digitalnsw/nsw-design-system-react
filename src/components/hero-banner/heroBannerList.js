/***************************************************************************************************************************************************************
 *
 * Hero banner list function
 *
 * Use hero banner list to add a linked list in the hero banner
 *
 **************************************************************************************************************************************************************/

import PropTypes from "prop-types";
import React from "react";

export const HeroBannerList = ({subtitle, children}) => {
    return (
        <div className="nsw-banner__links">
            <div className="nsw-banner__list">
                <div className="nsw-banner__sub-title">{subtitle}</div>
                {children}
            </div>
        </div>
    )
}


HeroBannerList.propTypes = {
    /**
     * Hero banner title
     */
    subtitle: PropTypes.string.isRequired,
    /**
     * Hero banner content
     */
    children: PropTypes.node.isRequired,
    /**
     * additional class names, optional
     */
    className: PropTypes.string,
};

export default HeroBannerList;
