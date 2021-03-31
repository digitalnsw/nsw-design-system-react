/***************************************************************************************************************************************************************
 *
 * Pagination function
 *
 * Pagination indicates to a user that a list of items has been split in to multiple pages.
 *
 **************************************************************************************************************************************************************/

import React from "react";
import PropTypes from "prop-types";

/**
 * Docs gen
 * Pagination
 * @param  {string}  active           - Active page number
 * @param  {array}   paginationItems        - An array of urls
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */

export const Pagination = ({
                               paginationItems,
                               className ,
                               children,
                               ...attributeOptions
                           }) => (
    <div className={`nsw-container ${className}`}
         {...attributeOptions}
    >
        <nav aria-label="Pagination">
            <ul className="nsw-pagination">
                <li className="nsw-pagination__item nsw-pagination__item--prev-page">
                    <a className="nsw-direction-link nsw-direction-link--icon-left" href="#">
                        <i className="material-icons nsw-material-icons nsw-material-icons--rotate-180"
                           focusable="false" aria-hidden="true">east</i>
                        <span className="nsw-direction-link__text">Back <span className="sr-only">a page</span></span>
                    </a>
                </li>
                {
                    paginationItems ? paginationItems.map((paginationItem, i) => (
                        <PaginationItem url={paginationItem.url} page={i+1}/>
                    )) : ''
                }
                {children}
                <li className="nsw-pagination__item">
                    <a className="nsw-direction-link" href="#">
                        <span className="nsw-direction-link__text">
                          Next <span className="sr-only">page</span>
                        </span>
                        <i className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">east</i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
);

Pagination.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    paginationItems: PropTypes.arrayOf(
        PropTypes.shape({
                url: PropTypes.string
            }
        )
    ).isRequired,
    children: PropTypes.node,
};

export const PaginationItem = ({url, page}) => (
    <li className="nsw-pagination__item">
        <a className="nsw-pagination__link" href={url}>
                    <span className="nsw-pagination__text">
                    <span className="sr-only">Page </span>{page}
                    </span>
        </a>
    </li>
)

export const PaginationEllipsis = () => (
    <li className="nsw-pagination__item">
        <a className="nsw-pagination__link" href="#">
          <span className="nsw-pagination__text">
            &hellip;
              <span className="sr-only">More</span>
          </span>
        </a>
    </li>
)


PaginationItem.propTypes = {
    page: PropTypes.number,
    url: PropTypes.string,
};

export default Pagination;
