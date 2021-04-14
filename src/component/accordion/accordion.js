import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as AccordionObject } from 'nsw-design-system/src/main';

export class Accordion extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      header, body, className = '', ...attributeOptions
    } = props;

    this.className = className;
    this.attributeOptions = attributeOptions;
    this.header = header;
    this.body = body;
  }

  componentDidMount() {
    const accordionsElem = document.querySelectorAll('.js-accordion');
    accordionsElem.forEach((element) => {
      new AccordionObject(element).init();
    });
  }

  render() {
    return (
      <div>
        <h2 className="nsw-accordion__title">
          {this.header}
        </h2>
        <div className="nsw-accordion__content">
          <div className="nsw-wysiwyg-content">
            {this.body}
          </div>
        </div>
      </div>
    );
  }
}
Accordion.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  className: null,
};

export const AccordionGroup = ({ className, children, ...attributeOptions }) => (
  <div className={`nsw-accordion js-accordion ${className}`} {...attributeOptions}>
    {children}
  </div>
);

AccordionGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};