import React from 'react';
import PropTypes from 'prop-types';

/**
 * DEFAULT
 * The breadcrumbs component
 *
 * @param  {string}  label            - The aria label of the component
 * @param  {array}   items            - Items inside the breadcrumbs passed on to BreadcrumbLinkList
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Breadcrumbs = ({
  label, items, linkComponent, className = '', ...attributeOptions
}) => (
  <nav
    className={`nsw-breadcrumbs ${className}`}
    aria-label={label}
    {...attributeOptions}
  >
    <BreadcrumbLinkList inline linkComponent={linkComponent} items={items} />
  </nav>
);

Breadcrumbs.propTypes = {
  label: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  linkComponent: 'a',
  className: null,
  label: null,
};

/**
 * An item inside the BreadcrumbLinkList component
 *
 * @param  {node}   text             - The link Text or link html
 * @param  {string} link             - The link URL, optional
 * @param  {string} linkComponent    - The component used for the link
 * @param  {object} onClick          - The onClick event handler
 * @param  {object} attributeOptions - Any other attribute options, optional
 */
export const BreadcrumbLinkListItem = ({
  text, link, linkComponent, children, onClick, ...attributeOptions
}) => {
  const LinkComponent = linkComponent;

  // If there is no link provided and an onClick function
  if (typeof onClick === 'function') {
    attributeOptions.onClick = onClick;
    // if we find an onClick event but no link we make it
    // a link so onClick can be added (no button support yet)
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
      <li>
        <LinkComponent {...attributeOptions}>{text}</LinkComponent>
        {children}
      </li>
    );
  }

  return (
    <li>
      {text}
      {children}
    </li>
  );
};

BreadcrumbLinkListItem.propTypes = {
  text: PropTypes.node.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

BreadcrumbLinkListItem.defaultProps = {
  linkComponent: 'a',
};

/**
 * DEFAULT
 * The Link List component
 *
 * @param  {array}   items            - All items inside the link list to be passed to
 *                                      BreadcrumbLinkListItem, format: { link: '', text: '',
 *                                      onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options, optional
 */
export const BreadcrumbLinkList = ({
  inline,
  items,
  linkComponent,
  className = '',
  ...attributeOptions
}) => (
  <ol className={`nsw-breadcrumb__list ${className}${inline ? ' nsw-breadcrumb__list--inline' : ''}`} {...attributeOptions}>
    {
            items.map(
              (item) => (
                <BreadcrumbLinkListItem
                  linkComponent={linkComponent}
                  key={item.text}
                  {...item}
                />
              ),
            )
        }
  </ol>
);

BreadcrumbLinkList.propTypes = {
  inline: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.node.isRequired,
      li: PropTypes.shape,
    }),
  ).isRequired,
  linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
};

BreadcrumbLinkList.defaultProps = {
  linkComponent: 'a',
};

export default Breadcrumbs;
