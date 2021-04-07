import React from 'react';
import PropTypes from 'prop-types';

/**
 * Hero banner
 *
 * @param  {string}  title            - The title of the banner
 * @param  {string}  intro            - The intro of the banner
 * @param  {object}  cta              - The call to action of the banner
 * @param  {object}  image            - The object of the image
 * @param  {boolean} dark             - Dark Variant
 * @param  {boolean} wide             - Wide Variant
 * @param  {boolean} featured         - Fixed minimum height
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export const HeroBanner = ({
  title, intro, cta, dark, wide, featured, image, children, className = '', ...attributeOptions
}) => (
  <div
    className={`nsw-banner ${dark ? ' nsw-banner--dark' : ''} ${wide ? 'nsw-banner--wide' : ''} ${featured ? ' nsw-banner--featured' : ''}  ${className}`}
    {...attributeOptions}
  >
    <div className="nsw-banner__container">
      <div className="nsw-banner__wrapper">
        <div className="nsw-banner__content nsw-wysiwyg-content">
          <h1>{title}</h1>
          <p className="nsw-intro">{intro}</p>
          {
                            cta ? (
                              <div className="nsw-banner__button">
                                <a href={cta.url} className={`nsw-button ${dark ? 'nsw-button--white' : 'nsw-button--primary'}`}>{cta.text}</a>
                              </div>
                            ) : ''
                        }

        </div>
        {children}
        <div className="nsw-banner__box" role="presentation">
          {image ? <img className="nsw-banner__image" src={image.src} alt={image.alt} />
            : <div className="nsw-banner__bg" />}
        </div>
      </div>
    </div>
  </div>
);

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  dark: PropTypes.bool,
  wide: PropTypes.bool,
  featured: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default HeroBanner;
