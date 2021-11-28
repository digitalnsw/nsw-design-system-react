import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param  {string}  link             - The link for this tag, optional
 * @param  {string}  text             - The text for the tag
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Tag = ({
  link, text, linkComponent, className, ...attributeOptions
}) => {
  const TagContainer = 'span';
  const LinkComponent = linkComponent;

  if (LinkComponent === 'a') {
    attributeOptions.href = link;
  } else if (typeof LinkComponent === 'function') {
    // If we are using a link component
    attributeOptions.to = link;
  }

  return (
    link
      ? <LinkComponent className={`nsw-tag ${className}`} {...attributeOptions}>{ text }</LinkComponent>
      : (
        <TagContainer {...attributeOptions} className={`nsw-tag ${className}`}>
          {text}
        </TagContainer>
      )
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Tag.defaultProps = {
  linkComponent: 'a',
  className: '',
};

/**
 * DEFAULT
 * The tags component
 *
 * @param  {array}   tags             - The tags, format: { link: '', text: '', onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  li               - An additional object to be spread into the list item
 * @param  {object}  attributeOptions - Any other attribute options
 */
const TagList = ({ tags, className = '', ...attributeOptions }) => (
  <div className={`nsw-list nsw-list--8 ${className}`} {...attributeOptions}>
    {
          tags.map(
            (tag) => (

              <Tag
                key={tag.text}
                linkComponent={tag.linkComponent}
                link={tag.link}
                text={tag.text}
                {...tag.attributeOptions}
              />

            ),
          )
      }
  </div>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string.isRequired,
      li: PropTypes.shape,
    }),
  ).isRequired,
  className: PropTypes.string,
};

TagList.defaultProps = {
};

export default TagList;
