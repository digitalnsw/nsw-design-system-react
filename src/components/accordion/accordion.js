import React from 'react';
import PropTypes from 'prop-types';
import { initSite } from 'nsw-design-system/src/main';

let IDstart = 0;

export class Accordion extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      contents, className = '', ...attributeOptions
    } = props;

    this.className = className;
    this.attributeOptions = attributeOptions;
    this.contents = contents;
    // Generate a unique ID and our css class
    IDstart += 1;
    this.ID = `accordion${IDstart}`;
  }

  componentDidMount() {
    initSite();
  }

  render() {
    return (
      <div className={`nsw-accordion js-accordion ${this.className}`} {...this.attributeOptions}>
        { this.contents.map(
          (content) => (

            <div>
              <h2 className="nsw-accordion__title">
                {content.header}
              </h2>
              <div className="nsw-accordion__content">
                <div className="nsw-wysiwyg-content">
                  {content.body}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    );
  }
}

Accordion.propTypes = {

  contents: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      body: PropTypes.string,
    }),
  ).isRequired,

  className: PropTypes.string,
};

Accordion.defaultProps = {
  className: null,
};

export default Accordion;
