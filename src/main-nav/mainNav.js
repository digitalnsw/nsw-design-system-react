import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'nsw-design-system/src/main';
import nextId from 'react-id-generator';

/**
 * Docs gen
 * Main Nav
 *
 * @param  {array}   navItems         - Array of navigation item objects,
 *                                      format { link: '', text: '' }
 * @param  {boolean} megaMenu          - Display menu as mega menu
 * @param  {string}  className        - An additional class, optional
 */

export class MainNav extends React.PureComponent {
  constructor(props) {
    super(props);

    const {
      navItems, megaMenu, className = '', ...attributeOptions
    } = props;
    this.className = className;
    this.attributeOptions = attributeOptions;
    this.navItems = navItems;
    this.megaMenu = megaMenu;
  }

  componentDidMount() {
    new Navigation().init();
  }

  render() {
    return (
      <nav
        id="main-navigation"
        className={`nsw-navigation js-open-navigation ${this.className} ${this.megaMenu ? 'js-mega-menu' : ''}`}
        aria-label="Main Navigation"
        {...this.attributeOptions}
      >
        <div className="nsw-navigation__header">
          <h2 id="nsw-navigation">Menu</h2>
          <button type="button" className="nsw-navigation__close js-close-navigation" aria-expanded="true">
            <i className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">close</i>
            <span className="sr-only">Close Menu</span>
          </button>
        </div>
        <ul className="nsw-navigation__list">
          {
                        this.navItems.map(
                          (navItem) => (
                            <li className="nsw-navigation__list-item" key={nextId()}>
                              <a href={navItem.url} className="nsw-navigation__link">
                                <span className="nsw-navigation__link-text">{navItem.text}</span>
                                {navItem.subNav
                                  ? (
                                    <i
                                      className="material-icons nsw-material-icons nsw-navigation__link-icon"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      keyboard_arrow_right
                                    </i>
                                  ) : ''}
                              </a>
                              {navItem.subNav
                                ? (
                                  <SubNav
                                    subNav={navItem.subNav}
                                    url={navItem.url}
                                    text={navItem.text}
                                    description={navItem.description}
                                    id={navItem.id}
                                  />
                                ) : ''}
                            </li>
                          ),
                        )
                    }
        </ul>
      </nav>
    );
  }
}

MainNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
      description: PropTypes.string,
      subNav: PropTypes.arrayOf,
    }),
  ).isRequired,
  megaMenu: PropTypes.bool,
  className: PropTypes.string,
};

export const SubNavHeader = ({
  url, text, description, id,
}) => (
  <div>
    <div className="nsw-subnavigation__header">
      <button
        type="button"
        className="nsw-subnavigation__back-btn js-close-subnav"
        aria-controls={`subnav-${id}`}
        aria-expanded="true"
      >
        <i
          className="material-icons nsw-material-icons nsw-material-icons--rotate-180"
          focusable="false"
          aria-hidden="true"
        >
          keyboard_arrow_right
        </i>
        <span>
          Back
          <span className="sr-only"> to previous menu</span>
        </span>
      </button>
      <button type="button" className="nsw-navigation__close js-close-navigation" aria-expanded="true">
        <i className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">close</i>
        <span className="sr-only">Close Menu</span>
      </button>
    </div>
    <h2 className="nsw-subnavigation__title">
      <a href={url} className="nsw-subnavigation__title-link">
        <span>{text}</span>
        <i
          className="material-icons nsw-material-icons nsw-card__icon"
          focusable="false"
          aria-hidden="true"
        >
          east
        </i>
      </a>
    </h2>
    <p className="nsw-subnavigation__description">{description}</p>
  </div>
);

SubNavHeader.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

export const SubNav = ({
  subNav, url, text, description,
}) => {
  const id = nextId();
  return (
    <div className="nsw-subnavigation" id={`subnav-${id}`} role="region" aria-label={text}>
      <SubNavHeader
        url={url}
        text={text}
        description={description}
        id={id}
      />
      <ul className="nsw-subnavigation__list">
        {subNav.map((subNavItem) => (
          <li className="nsw-subnavigation__list-item" key={nextId()}>
            <a href={subNavItem.url} className="nsw-subnavigation__link">
              <span className="nsw-navigation__link-text">
                {subNavItem.text}
              </span>
              {subNavItem.subNav
                ? (
                  <i
                    className="material-icons nsw-material-icons nsw-navigation__link-icon"
                    focusable="false"
                    aria-hidden="true"
                  >
                    keyboard_arrow_right
                  </i>
                ) : ''}
            </a>

            {subNavItem.subNav ? (
              <div
                className="nsw-subnavigation"
                id={`subnav-${nextId()}`}
                role="region"
                aria-label={`${text} Submenu`}
              >
                <SubNavHeader
                  url={url}
                  text={text}
                  description={description}
                />
                <ul className="nsw-subnavigation__list">
                  {subNavItem.subNav.map((subSubNavItem) => (
                    <li className="nsw-subnavigation__list-item" key={nextId()}>
                      <a href={subSubNavItem.url} className="nsw-subnavigation__link">
                        <span className="nsw-navigation__link-text">
                          {subSubNavItem.text}
                        </span>
                        {subSubNavItem.subNav
                          ? (
                            <i
                              className="material-icons nsw-material-icons nsw-navigation__link-icon"
                              focusable="false"
                              aria-hidden="true"
                            >
                              keyboard_arrow_right
                            </i>
                          ) : ''}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

SubNav.propTypes = {
  subNav: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      text: PropTypes.string,
      subNav: PropTypes.arrayOf,
    }),
  ).isRequired,
  url: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
};
