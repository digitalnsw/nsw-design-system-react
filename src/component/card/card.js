import React from 'react'
import PropTypes from 'prop-types'

/**
 * The card  component
 *
 * @param {string}   link               - The link that clicking the card goes to
 * @param {string}   tag                - The tag (optional)
 * @param {string}   date               - The date (optional)
 * @param {string}   dateMomentFormat   - The date display format (optional, def to '4th June 2021')
 * @param {string}   image              - The image URL/path (optional)
 * @param {string}   imageAlt           - The alt text for image (mandatory if image supplied)
 * @param {string}   headline           - Title for card
 * @param {bool}     content            - Removes highlight bar if true
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
const Card = ({
  link,
  headline,
  content,
  tag,
  date,
  image,
  imageAlt,
  className,
  children,
  ...attributesOptions
}) => {
  let CardContainer = 'div'

  if (link !== undefined) {
    CardContainer = 'div'
    attributesOptions.href = link
  }

  return (
    <CardContainer
      className={
        `nsw-card ${className}``${headline ? 'nsw-card--headline' : ''} ` +
        +`${content ? 'nsw-card--content' : ''} `
      }
      {...attributesOptions}
    >
      <CardContent>
        {headline ? <CardHeader link={link}>{headline}</CardHeader> : ''}
        {children}
        {date ? <CardDate date={date} /> : ''}
        {tag ? <CardTag>{tag}</CardTag> : ''}
      </CardContent>
      {image ? <CardImage src={image} alt={imageAlt} /> : ''}
    </CardContainer>
  )
}

Card.propTypes = {
  link: PropTypes.string,
  tag: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  headline: PropTypes.string.isRequired,
  content: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

Card.defaultProps = {
  className: null
}

/**
 * An inner container for the card, with padding of 1 rem
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardContent = ({ className, children, ...attributesOptions }) => (
  <div className={`nsw-card__content ${className}`} {...attributesOptions}>
    {children}
    <i
      className='material-icons nsw-material-icons nsw-card__icon'
      focusable='false'
      aria-hidden='true'
    >
      east
    </i>
  </div>
)

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

CardContent.defaultProps = {
  className: null,
  children: null
}

/**
 * An inner container for the card, with padding of 1 rem
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardHeader = ({ className, level, link, children }) => {
  const HeadingTag = level ? `h${level}` : ''
  if (link !== undefined) {
    return (
      <HeadingTag className={`nsw-card__title ${className}`}>
        <a href={link} className='nsw-card__link'>
          {children}
        </a>
      </HeadingTag>
    )
  }
  return <HeadingTag className='nsw-card__title'>{children}</HeadingTag>
}

CardHeader.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  link: PropTypes.string,
  children: PropTypes.node
}

CardHeader.defaultProps = {
  className: '',
  level: 2
}

/**
 * An image inside the card
 * @param {string}   src                - Image source
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardImage = ({ src, className, alt, ...attributesOptions }) => (
  <div className='nsw-card__image-area'>
    <img
      className={`nsw-card__image ${className}`}
      src={src}
      alt={alt}
      {...attributesOptions}
    />
  </div>
)

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string
}

CardImage.defaultProps = {
  className: ''
}

/**
 * An paragraph inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardCopy = ({
  src,
  children,
  className,
  ...attributesOptions
}) => (
  <p className={`nsw-card__copy ${className}`} {...attributesOptions}>
    {children}
  </p>
)

CardCopy.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  children: PropTypes.node
}

CardCopy.defaultProps = {
  className: ''
}

/**
 * An tag inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardTag = ({ children, className, ...attributesOptions }) => (
  <p className={`nsw-card__tag ${className}`} {...attributesOptions}>
    {children}
  </p>
)

CardTag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

CardTag.defaultProps = {
  className: ''
}

/**
 * An date inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardDate = ({ className, date, ...attributesOptions }) => (
  <p className={`nsw-card__date ${className}`} {...attributesOptions}>
    <time dateTime={date}>{date}</time>
  </p>
)

CardDate.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string.isRequired
}

CardDate.defaultProps = {
  className: null
}

/**
 * A horizontal rule used to divide content inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardDivider = ({ className, ...attributesOptions }) => (
  <hr className={`nsw-card__divider ${className}`} {...attributesOptions} />
)

CardDivider.propTypes = {
  className: PropTypes.string
}

CardDivider.defaultProps = {
  className: ''
}

/**
 * Use when making the entire click area of card clickable.
 * @param {string}   link               - The location of the link
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardLink = ({ link, text, className, ...attributesOptions }) => (
  <a
    href={link}
    className={`nsw-card--clickable__link ${className}`}
    {...attributesOptions}
  >
    {text}
  </a>
)

CardLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

CardLink.defaultProps = {
  className: ''
}

/**
 * The footer section of the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardFooter = ({
  dark,
  alt,
  children,
  className,
  ...attributesOptions
}) => (
  <div className={`nsw-card__footer ${className}`} {...attributesOptions}>
    {children}
  </div>
)

CardFooter.propTypes = {
  className: PropTypes.string,
  dark: PropTypes.bool,
  alt: PropTypes.bool,
  children: PropTypes.node
}

CardFooter.defaultProps = {
  className: '',
  dark: false,
  alt: false
}

/**
 * The footer section of the card
 * @param {string}   level              - The tag level (<h1/> <h2/> etc)
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardTitle = ({
  children,
  className,
  level,
  ...attributeOptions
}) => {
  const HeadingTag = `h${level}`

  return (
    <HeadingTag
      className={`nsw-card__title ${className}`}
      {...attributeOptions}
    >
      {children}
    </HeadingTag>
  )
}

CardTitle.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  className: PropTypes.string,
  children: PropTypes.node
}

CardTitle.defaultProps = {
  className: null
}

export default Card
