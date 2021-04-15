import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as TabsObject } from 'nsw-design-system/src/main';

export class Tabs extends React.PureComponent {
  /**
     * Constructor
     * Create state and iterate over a unique ID
     *
     * @param  {object}  props - The props object
     */
  constructor(props) {
    super(props);

    const { className = '', children, ...attributeOptions } = props;

    this.className = className;
    this.attributeOptions = attributeOptions;
    this.children = children;
  }

  componentDidMount() {
    const tabsElement = document.querySelectorAll('.js-tabs');
    if (tabsElement) {
      tabsElement.forEach((element) => {
        new TabsObject(element).init();
      });
    }
  }

  render() {
    return (
      <div className={`nsw-tabs js-tabs ${this.className}`} {...this.attributeOptions}>
        {this.children}
      </div>
    );
  }
}

Tabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export const TabItemWrapper = ({ children }) => (
  <ul className="nsw-tabs__list">
    {children}
  </ul>
);

TabItemWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export const TabItem = ({ urlHash, title }) => (
  <li className="nsw-tabs__list-item">
    <a href={`#${urlHash}`} className="nsw-tabs__link">{title}</a>
  </li>
);

TabItem.propTypes = {
  urlHash: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export const TabSection = ({ urlHash, children }) => (
  <section id={urlHash} className="nsw-tabs__content">
    {children}
  </section>
);

TabSection.propTypes = {
  urlHash: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tabs;
