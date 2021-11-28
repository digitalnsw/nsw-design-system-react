import React from 'react';
import PropTypes from 'prop-types';

/**
 * The content block component
 *
 * @param {string}   image              - The image URL/path (optional)
 * @param {string}   icon               - The icon markup (optional)
 * @param {string}   imageAlt           - The alt text for image (mandatory if image supplied)
 * @param {string}   copy               - The content of the content block
 * @param {string}   headline           - Title for card
 * @param {object}   mainLink           - Add a view more link
 * @param {bool}     content            - Removes highlight bar if true
 * @param {string}   className          - An additional class, optional
 * @param {array}    links               - A list of anchor tags and its links
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const ContentBlock = ({
  links, mainLink, headline, copy, image, imageAlt, icon, className,
}) => {
  const ContentBlockContainer = 'div';
  return (
    <ContentBlockContainer className={`nsw-content-block ${className}`}>
      {image ? <ContentBlockImage src={image} alt={imageAlt} /> : ''}
      {icon ? <ContentBlockIcon>{icon}</ContentBlockIcon> : ''}
      <div className="nsw-content-block__content">
        {headline ? <ContentBlockHeading>{headline}</ContentBlockHeading> : ''}
        {copy ? <ContentBlockCopy>{copy}</ContentBlockCopy> : ''}
        <ul className="nsw-content-block__list">
          {
                        links ? links.map(
                          (link) => (
                            <li key={link.title}><a href={link.href}>{link.title}</a></li>
                          ),
                        ) : ''
                    }
        </ul>
        {mainLink ? <div className="nsw-content-block__link"><a href={mainLink.url}>{mainLink.text}</a></div> : ''}
      </div>
    </ContentBlockContainer>
  );
};

ContentBlock.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  headline: PropTypes.string.isRequired,
  icon: PropTypes.node,
  copy: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
  mainLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};

ContentBlock.defaultProps = {
  className: '',
};

/**
 * An image inside the card
 * @param {string}   src                - Image source
 * @param {string}   className          - An additional class, optional
 * @param {string}   alt                - Alt text
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const ContentBlockImage = ({
  src, className, imageAlt, ...attributesOptions
}) => (
  <div className="nsw-content-block__image">
    <img src={src} alt={imageAlt} className="nsw-content-block__image" {...attributesOptions} />
  </div>
);

ContentBlockImage.propTypes = {
  src: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
};

ContentBlockImage.defaultProps = {
  className: '',
};

/**
 * An icon inside the content block
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const ContentBlockIcon = ({ children, className, ...attributesOptions }) => (
  <div className="nsw-content-block__image" {...attributesOptions}>
    <div className="nsw-content-block__icon">
      { children }
    </div>
  </div>
);

ContentBlockIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ContentBlockIcon.defaultProps = {
  className: null,
};

/**
 * A paragraph inside the content block
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const ContentBlockCopy = ({ children, className, ...attributesOptions }) => (
  <p className={`nsw-content-block__copy ${className}`} {...attributesOptions}>
    {children}
  </p>
);

ContentBlockCopy.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ContentBlockCopy.defaultProps = {
  className: null,
};

/**
 * An paragraph inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const ContentBlockHeading = ({ children, className, ...attributesOptions }) => (
  <h2 className="nsw-content-block__title" {...attributesOptions}>{children}</h2>
);

ContentBlockHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ContentBlockHeading.defaultProps = {
  className: null,
};

export default ContentBlock;
