import React from 'react';
import PropTypes from 'prop-types';
import nextId from 'react-id-generator';

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
  active,
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
    <nav className="nsw-pagination" aria-label="Pagination">
      <ul>
        <li>
          <a className="nsw-icon-button" href={backLink}>
            <span
              className="material-icons nsw-material-icons"
              focusable="false"
              aria-hidden="true"
            >
              keyboard_arrow_left
            </span>
            <span className="sr-only">Back</span>
          </a>
        </li>
        {
                    paginationItems ? paginationItems.map((paginationItem, i) => (
                      <PaginationItem url={paginationItem.url} page={i + 1} key={`pagination-${nextId()}`} active={active} />
                    )) : ''
                }
        {children}
        <li>
          <a href={nextLink} className="nsw-icon-button">
            <span className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">keyboard_arrow_right</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

Pagination.propTypes = {
  className: PropTypes.string,
  paginationItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
    }),
  ),
  children: PropTypes.node,
  backLink: PropTypes.string,
  nextLink: PropTypes.string,
  active: PropTypes.number,
};

export const PaginationItem = ({ url, page, active }) => (
  <li>
    <a className={active === page ? 'active' : ''} href={url}>
      <span>
        <span className="sr-only">Page </span>
        {page}
      </span>
    </a>
  </li>
);

export const PaginationEllipsis = () => (
  <li>
    <span>
      &hellip;
    </span>
  </li>
);

PaginationItem.propTypes = {
  page: PropTypes.number,
  active: PropTypes.number,
  url: PropTypes.string,
};

export default Pagination;
