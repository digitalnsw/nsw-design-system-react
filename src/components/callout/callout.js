import React from 'react';
import PropTypes from 'prop-types';

/**
 * Default callout
 *
 * @param  {string}  title            - The title of the header
 * @param  {string}  level            - The tag level (<h1/> <h2/> etc), default: '1'
 * @param  {string}  children         - Anything inside
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const Callout = ({
  title, level, children, className = '', ...attributeOptions
}) => {
  const HeadingTag = `h${level}`;

  return (
    <div
      className={`nsw-callout ${className}`}
      {...attributeOptions}
    >
      <div className="nsw-callout__content">
        <HeadingTag
          className="nsw-callout__title"
        >
          { title }
        </HeadingTag>
        { children }
      </div>
    </div>
  );
};

Callout.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Callout.defaultProps = {
  level: 4,
};

export default Callout;
