import React from 'react';
import PropTypes from 'prop-types';

/**
 * An item inside the LinkList component
 *
 * @param  {node}   text             - The link Text or link html
 * @param  {string} link             - The link URL, optional
 * @param  {string} linkComponent    - The component used for the link
 * @param  {object} li               - An additional object to be spread
*                                      into the wrapping element, optional
 * @param  {object} onClick          - The onClick event handler
 * @param  {object} attributeOptions - Any other attribute options, optional
 */
export const LinkListItem = ({
  text, link, linkComponent, children, onClick, ...attributeOptions
}) => {
  const LinkComponent = linkComponent;

  // If there is no link provided and an onClick function
  if (typeof onClick === 'function') {
    attributeOptions.onClick = onClick;

    // if we find an onClick event but no link we make it a
    // link so onClick can be added (no button support yet)
    if (!link) {
      link = '#';
    }
  }

  // If we are using a normal link
  if (LinkComponent === 'a') {
    attributeOptions.href = link;
  } else if (typeof LinkComponent === 'function') {
  // If we are using a link component
    attributeOptions.to = link;
  }

  if (link) {
    return (
      <li className="nsw-link-list__item">
        <LinkComponent {...attributeOptions}>
          <span>{text}</span>
          <span
            className="material-icons nsw-material-icons nsw-link-list__icon"
            focusable="false"
            aria-hidden="true"
          >
            east
          </span>
        </LinkComponent>
        {children}
      </li>
    );
  }

  return (
    <li className="nsw-link-list__item">
      {text}
      {children}
    </li>
  );
};

LinkListItem.propTypes = {
  text: PropTypes.node.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
};

LinkListItem.defaultProps = {
  linkComponent: 'a',
};

/**
 * DEFAULT
 * The Link List component
 *
 * @param  {array}   items            - All items inside the link list to be passed to LinkListItem,
 *                                      format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options, optional
 */
export const LinkList = ({
  items, linkComponent, className = '', ...attributeOptions
}) => (
  <div className="nsw-link-list">
    <ul className={`nsw-link-list__list ${className}`} {...attributeOptions}>
      {
                items.map(
                  (item) => (
                    <LinkListItem
                      linkComponent={linkComponent}
                      key={item.text}
                      {...item}
                    />
                  ),
                )
            }
    </ul>
  </div>
);

LinkList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.node.isRequired,
    }),
  ).isRequired,
  linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
};

LinkList.defaultProps = {
  linkComponent: 'a',
};

export default LinkList;
