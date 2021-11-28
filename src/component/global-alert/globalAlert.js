import React from 'react';
import PropTypes from 'prop-types';
import { initSite } from 'nsw-design-system/src/main';

/**
 * All different kind of button options
 *
 * @type {Object}
 */
 const options = {
   critical: 'nsw-global-alert--critical',
   light: 'nsw-global-alert--light',
 };

 const buttonStyles = {
   default: 'nsw-button nsw-button--white',
   critical: 'nsw-button nsw-button--white',
   light: 'nsw-button nsw-button--dark',
 };

export class GlobalAlert extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      title, content, ctaText, ctaHref, as='default', className = '', children, ...attributeOptions
    } = props;
    this.className = className;
    this.attributeOptions = attributeOptions;
    this.title = title;
    this.content = content;
    this.ctaText = ctaText;
    this.ctaHref = ctaHref;
    this.as = as;
  }

  componentDidMount() {
    initSite();
  }

  render() {
    return (
      <div
        className={`nsw-global-alert ${this.className} ${options[this.as]}`}
        {...this.attributeOptions}
      >
        <div className="nsw-global-alert__wrapper">
          <div className="nsw-global-alert__content">
            <div className="nsw-global-alert__title">
              {this.title}
            </div>
            <p>{this.content}</p>
          </div>
          <p>
            {this.ctaText && this.ctaHref
              ? <a href={this.ctaHref} className={this.as ? buttonStyles[this.as] : buttonStyles['default']}>{this.ctaText}</a>
              : ''
            }
          </p>
          <button type="button" className="nsw-icon-button">
            <span className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">close</span>
            <span className="sr-only">Close message</span>
          </button>
        </div>
      </div>
    );
  }
}

GlobalAlert.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  children: PropTypes.node,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
  className: PropTypes.string,
  as: PropTypes.oneOf(['critical', 'light', 'default']),
};

export default GlobalAlert;
