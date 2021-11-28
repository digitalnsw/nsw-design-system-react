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
 * @param  {boolean} style            - Style Variant
 * @param  {boolean} wide             - Wide Variant
 * @param  {boolean} featured         - Fixed minimum height
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */

 const options = {
   dark: 'nsw-hero-banner--dark',
   light: 'nsw-hero-banner--light',
   white: 'nsw-hero-banner--white',
 };

 const buttonStyles = {
   dark: 'nsw-button nsw-button--white',
   light: 'nsw-button nsw-button--dark',
   white: 'nsw-button nsw-button--dark',
 };


export const HeroBanner = ({
  title, intro, cta, style, wide, featured, image, children, className = '', ...attributeOptions
}) => (
  <div
    className={`nsw-hero-banner ${style ? options[style] : ''} ${wide ? 'nsw-hero-banner--wide' : ''} ${featured ? ' nsw-hero-banner--featured' : ''}  ${className}`}
    {...attributeOptions}
  >
    <div className="nsw-hero-banner__container">
      <div className="nsw-hero-banner__wrapper">
        <div className="nsw-hero-banner__content nsw-wysiwyg-content">
          <h1>{title}</h1>
          <p className="nsw-intro">{intro}</p>
          {
                            cta ? (
                              <div className="nsw-hero-banner__button">
                                <a href={cta.url} className={`nsw-button ${buttonStyles[style]}`}>{cta.text}</a>
                              </div>
                            ) : ''
                        }

        </div>
        {children}
        <div className="nsw-hero-banner__box" role="presentation">
          {image ? <img className="nsw-hero-banner__image" src={image.src} alt={image.alt} />
            : <div className="nsw-hero-banner__bg" />}
        </div>
      </div>
    </div>
  </div>
);

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  style: PropTypes.oneOf(['dark', 'light', 'white']),
  wide: PropTypes.bool,
  featured: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cta: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
};

HeroBanner.defaultProps = {
  style: 'white',
  title: 'Hero banner',
};

export default HeroBanner;
