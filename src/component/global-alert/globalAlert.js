import React from 'react';
import PropTypes from 'prop-types';
import { initSite } from 'nsw-design-system/src/main';

/**
 * All different kind of button options
 *
 * @type {Object}
 */
const options = {
  critical: 'nsw-sitewide-message--critical',
  light: 'nsw-sitewide-message--light',
};

export class GlobalAlert extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      title, content, ctaText, ctaHref, as, className = '', children, ...attributeOptions
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
        className={`nsw-sitewide-message ${this.className} ${options[this.as]}`}
        {...this.attributeOptions}
      >
        <div className="nsw-sitewide-message__wrapper">
          <div className="nsw-sitewide-message__content">
            <h2 className="nsw-sitewide-message__title">
              {this.title}
            </h2>
            <p>{this.content}</p>
          </div>
          {this.ctaText && this.ctaHref
            ? <a href={this.ctaHref} className="nsw-button">{this.ctaText}</a>
            : <button type="button" className="nsw-button">{this.ctaText}</button>}
          <button type="button" className="nsw-sitewide-message__close">
            <i className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">close</i>
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
  as: PropTypes.string,
};

export default GlobalAlert;
