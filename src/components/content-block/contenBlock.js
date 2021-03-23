/***************************************************************************************************************************************************************
 *
 * card function
 *
 * A container for all types of content
 *
 **************************************************************************************************************************************************************/

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
 * @param {string}   viewMore           - Add a view more link
 * @param {bool}     content            - Removes highlight bar if true
 * @param {string}   className          - An additional class, optional
 * @param {array}    links               - A list of anchor tags and its links
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const ContentBlock = ({links, viewMore, headline, copy, image, imageAlt, icon, className, children, ...attributesOptions}) => {
    let ContentBlockContainer = 'div';
    return (
        <ContentBlockContainer className={`nsw-content-block ${className}`}>
            <div class="nsw-content-block__content">
                {headline ? <ContentBlockHeading>{headline}</ContentBlockHeading> : ''}
                {copy ? <ContentBlockCopy>{copy}</ContentBlockCopy> : ''}
                <ul className="nsw-content-block__list">
                    {
                        links ? links.map(
                            (link) => (
                                <li><a href={link.href}>{link.title}</a></li>
                            )
                        ) : ''
                    }
                </ul>
                {viewMore ? <div className="nsw-content-block__link"><a href={viewMore}>View more</a></div> : ''}
            </div>
            {image ? <ContentBlockImage src={image} alt={imageAlt}/> : ''}
            {icon ? <ContentBlockIcon>{icon}</ContentBlockIcon> : ''}
        </ContentBlockContainer>
    )
};

ContentBlock.propTypes = {
    /**
     * The image URL/path (optional)
     */
    image: PropTypes.string,
    /**
     * Alt text for image (req if image supplied)
     */
    imageAlt: PropTypes.string,
    /**
     * Headline (required)
     */
    headline: PropTypes.string.isRequired,
    /**
     * Removes highlight bar if true
     */
    content: PropTypes.bool,
    /**
     * Additional class names
     */
    className: PropTypes.string,
};

ContentBlock.defaultProps = {
    className: '',
};

/**
 * An image inside the card
 * @param {string}   src                - Image source
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const ContentBlockImage = ({src, className, alt, ...attributesOptions}) => (
    <div class="nsw-content-block__image-area">
        <img src={src} alt={alt} className={`nsw-content-block__image`} {...attributesOptions} />
    </div>
);

ContentBlockImage.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string
};

ContentBlockImage.defaultProps = {
    className: ''
};

/**
 * An icon inside the content block
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const ContentBlockIcon = ({children, className, ...attributesOptions}) => (
    <div className="nsw-content-block__image-area">
        <div className="nsw-content-block__icon">
            { children }
        </div>
    </div>
);

ContentBlockIcon.propTypes = {
    className: PropTypes.string
};

ContentBlockIcon.defaultProps = {
    className: ''
};


/**
 * A paragraph inside the content block
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const ContentBlockCopy = ({children, className, ...attributesOptions}) => (
    <p className={`nsw-content-block__copy ${className}`}>
        {children}
    </p>
);

ContentBlockCopy.propTypes = {
    className: PropTypes.string
};

ContentBlockCopy.defaultProps = {
    className: ''
};

/**
 * An paragraph inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const ContentBlockHeading = ({children, className, ...attributesOptions}) => (
    <h2 className="nsw-content-block__title">{ children }</h2>
);

ContentBlockHeading.propTypes = {
    className: PropTypes.string
};

ContentBlockHeading.defaultProps = {
    className: ''
};
