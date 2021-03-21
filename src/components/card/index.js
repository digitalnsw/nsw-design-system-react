/*! [replace-name] v[replace-version] */
/***************************************************************************************************************************************************************
 *
 * card function
 *
 * A container for all types of content
 *
 **************************************************************************************************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
const Card = ({ link, headline, content, tag, date, dateMomentFormat, image, imageAlt, className, children, ...attributesOptions }) => {
	let CardContainer = 'div';

	if( link !== undefined ) {
		CardContainer = 'div';
		attributesOptions.href = link;
	}

	return (
		<CardContainer className={`nsw-card ${className}` +
								`${headline ? 'nsw-card--headline' : ''} ` +
								`${content ? 'nsw-card--content' : ''} `}
								{...attributesOptions}
								>
      <CardContent>
        {headline ? <CardHeader link={link}>{headline}</CardHeader> : ''}
        {children}
        {date ? <CardDate date={date} dateMomentFormat={dateMomentFormat} /> : ''}
        {tag ? <CardTag>{tag}</CardTag> : ''}
      </CardContent>
      {image ? <CardImage src={image} alt={imageAlt} /> : ''}
		</CardContainer>
	)
};

Card.propTypes = {
  /**
   * The link that clicking the card goes to
  */
	link: PropTypes.string,
  /**
   * The tag to display (e.g. a category for news)
  */
  tag: PropTypes.string,
  /**
   * The date to display, format YYYY-MM-DD
  */
  date: PropTypes.string,
  /**
   * The date display format using momentum.js (Default to '4th June 2021')
  */
  dateMomentFormat: PropTypes.string,
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

Card.defaultProps = {
	className: '',
  dateMomentFormat: 'Do MMMM YYYY'
};


/**
 * An inner container for the card, with padding of 1 rem
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardContent = ({ className, children, ...attributesOptions }) => (
	<div className={`nsw-card__content ${className}`} {...attributesOptions}>
		{children}
    <i className="material-icons nsw-material-icons nsw-card__icon" focusable="false" aria-hidden="true">east</i>
	</div>
);

CardContent.propTypes = {
	className: PropTypes.string
}

CardContent.defaultProps = {
	className: ''
}


/**
 * An inner container for the card, with padding of 1 rem
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardHeader = ({ className, level, alt, dark, link, children, ...attributesOptions }) => {
      const HeadingTag = `h${ level }`;
      if(link != undefined){
        return (
          <HeadingTag className={`nsw-card__title`}><a href='' className='nsw-card__link'>{children}</a></HeadingTag>
        )
      } else {
        return (
          <HeadingTag className={`nsw-card__title`}>{children}</HeadingTag >
        )
      }

};

CardHeader.propTypes = {
	className: PropTypes.string,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]),
}

CardHeader.defaultProps = {
	className: '',
	dark: false,
	alt: false,
  level: 2
}


/**
 * An image inside the card
 * @param {string}   src                - Image source
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardImage = ({ src,className,alt, ...attributesOptions }) => (
  <div class="nsw-card__image-area">
    <img className={`nsw-card__image ${className}`} src={ src } alt={ alt } {...attributesOptions} />
  </div>
);

CardImage.propTypes = {
	src: PropTypes.string.isRequired,
	className: PropTypes.string
};

CardImage.defaultProps = {
	className: ''
};


/**
 * An paragraph inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardCopy = ({ src, children, className, ...attributesOptions }) => (
	<p className={`nsw-card__copy ${className}`}>
    {children}
  </p>
);

CardCopy.propTypes = {
	className: PropTypes.string
};

CardCopy.defaultProps = {
	className: ''
};


/**
 * An tag inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardTag = ({ src, children, className, ...attributesOptions }) => (
	<p className={`nsw-card__tag ${className}`}>
    {children}
  </p>
);

CardTag.propTypes = {
	className: PropTypes.string
};

CardTag.defaultProps = {
	className: ''
};


/**
 * An date inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardDate = ({ src, children, className, dateMomentFormat, date, ...attributesOptions }) => (
	<p className={`nsw-card__date ${className}`}>
    <time datetime={date}>
    {moment(date).format(dateMomentFormat)}
    </time>
  </p>
);

CardDate.propTypes = {
	className: PropTypes.string
};

CardDate.defaultProps = {
	className: '',
  dateMomentFormat: 'Do MMMM YYYY'
};


/**
 * A horizontal rule used to divide content inside the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardDivider = ({ className, ...attributesOptions }) => (
	<hr className={`nsw-card__divider ${className}`} {...attributesOptions} />
);

CardDivider.propTypes = {
	className: PropTypes.string
};

CardDivider.defaultProps = {
	className: ''
};



/**
 * Use when making the entire click area of card clickable.
 * @param {string}   link               - The location of the link
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardLink = ({ link, text, className, ...attributesOptions }) => (
	<a href={link} className={`nsw-card--clickable__link ${className}`} {...attributesOptions}>
		{text}
	</a>
);

CardLink.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	className: PropTypes.string
};

CardLink.defaultProps = {
	className: ''
};



/**
 * The footer section of the card
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardFooter = ({ dark, alt, children, className, ...attributesOptions }) => {


	let footerTheme = "";

	if ( dark || alt ) {
		footerTheme = `au-body ${ dark ? "au-body--dark" : "" } ${ alt ? "au-body--alt" : ""}`
	};

	return (
		<div className={`nsw-card__footer ${footerTheme} ${className}`} {...attributesOptions}>
			{children}
		</div>
)};

CardFooter.propTypes = {
	className: PropTypes.string,
	dark: PropTypes.bool,
	alt: PropTypes.bool,
}

CardFooter.defaultProps = {
	className: '',
	dark: false,
	alt: false,
}



/**
 * The footer section of the card
 * @param {string}   level              - The tag level (<h1/> <h2/> etc)
 * @param {string}   className          - An additional class, optional
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export const CardTitle = ({ children, className, level, ...attributeOptions }) => {
	const HeadingTag = `h${ level }`;

	return (
		<HeadingTag className={ `nsw-card__title ${ className }` } { ...attributeOptions }>{ children }</HeadingTag>
	);
};

CardTitle.propTypes = {
	level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]).isRequired,
	className: PropTypes.string
};

CardTitle.defaultProps = {
	className: ''
};


export default Card;
