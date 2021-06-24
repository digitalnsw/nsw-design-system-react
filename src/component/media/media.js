import React from 'react'
import PropTypes from 'prop-types'

/**
 * Media combines visual elements with text to give context and alignment within content.
 *
 * @param  {string}  image            - The file location of the image file
 * @param  {string}  video            - The file locaiton of the video file
 * @param  {string}  title            - The alt text of the media file
 * @param  {string}  caption          - Caption text to support or describe media image/video
 * @param  {boolean} transparent      - Media caption background in white transparent background
 * @param  {string}  left             - Media positioned to the left in percentage width with increments of 30, 40, 50
 * @param  {string}  right            - Media positioned to the right in percentage width with increments of 30, 40, 50
 * @param  {string}  center           - Media positioned to the center in percentage width with increments of 60, 70, 80, 90
 */
export const Media = ({
  image, video, title, caption, transparent, left, right, center
}) => (
  <figure className={`nsw-media${left === undefined || left == 'none' ? '': ` nsw-media--left-${left}`}
  ${right === undefined || right === 'none' ? '': ` nsw-media--right-${right}`}
  ${center === undefined || center == 'none' ? '':` nsw-media--${center}`} ${transparent ? 'nsw-media--transparent' : ''}`}>
    {video ? <div className="nsw-media__video">
      <iframe src={video} title={title} frameBorder="0" allowFullScreen></iframe>
    </div> : ''}
    {image ? <img src={image} alt={title} /> : ''}
    <figcaption>{caption}</figcaption>
  </figure>
)

Media.propTypes = {
  transparent: PropTypes.bool,
  video: PropTypes.string,
  image: PropTypes.string,
  caption: PropTypes.string,
  title: PropTypes.string,
  right: PropTypes.oneOf( ['none', '30', '40', '50']),
  left: PropTypes.oneOf( ['none', '30', '40', '50']),
  center: PropTypes.oneOf(['none', '60', '70', '80', '90'])
}

Media.defaultProps = {
  transparent: true
}
export default Media;
