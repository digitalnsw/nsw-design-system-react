import React from 'react';
import PropTypes from 'prop-types';

/**
 * Docs gen
 * Pagination
 * @param  {string}  active           - Active page number
 * @param  {array}   paginationItems  - An array of urls
 * @param  {string}  backLink         - A url to move back to previous
 * @param  {string}  nextLink         - A url to move next to page
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */

export const Pagination = ({
  backLink,
  nextLink,
  paginationItems,
  className,
  children,
  ...attributeOptions
}) => (
  <div
    className={`nsw-container ${className}`}
    {...attributeOptions}
  >
    <nav aria-label="Pagination">
      <ul className="nsw-pagination">
        <li className="nsw-pagination__item nsw-pagination__item--prev-page">
          <a className="nsw-direction-link nsw-direction-link--icon-left" href={backLink}>
            <i
              className="material-icons nsw-material-icons nsw-material-icons--rotate-180"
              focusable="false"
              aria-hidden="true"
            >
              east
            </i>
            <span className="nsw-direction-link__text">
              Back
              <span className="sr-only">a page</span>
            </span>
          </a>
        </li>
        {
                    paginationItems ? paginationItems.map((paginationItem, i) => (
                      <PaginationItem url={paginationItem.url} page={i + 1} />
                    )) : ''
                }
        {children}
        <li className="nsw-pagination__item">
          <a className="nsw-direction-link" href={nextLink}>
            <span className="nsw-direction-link__text">
              Next
              {' '}
              <span className="sr-only">page</span>
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
      url: PropTypes.string,
    }),
  ).isRequired,
  children: PropTypes.node,
  backLink: PropTypes.string,
  nextLink: PropTypes.string,
};

export const PaginationItem = ({ url, page }) => (
  <li className="nsw-pagination__item">
    <a className="nsw-pagination__link" href={url}>
      <span className="nsw-pagination__text">
        <span className="sr-only">Page </span>
        {page}
      </span>
    </a>
  </li>
);

export const PaginationEllipsis = () => (
  <li className="nsw-pagination__item">
    <div className="nsw-pagination__link">
      <span className="nsw-pagination__text">
        &hellip;
        <span className="sr-only">More</span>
      </span>
    </div>
  </li>
);

PaginationItem.propTypes = {
  page: PropTypes.number,
  url: PropTypes.string,
};

export default Pagination;
