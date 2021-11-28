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
        id="main-nav"
        className={`nsw-main-nav ${this.className} ${this.megaMenu ? 'js-mega-menu' : ''}`}
        aria-label="Main Navigation"
        {...this.attributeOptions}
      >
        <div className="nsw-main-nav__header">
          <div id="nsw-main-nav__title">Menu</div>
          <button type="button" className="nsw-icon-button js-close-nav" aria-expanded="true">
            <span className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">close</span>
            <span className="sr-only">Close Menu</span>
          </button>
        </div>
        <ul className="nsw-main-nav__list">
          {
                        this.navItems.map(
                          (navItem) => (
                            <li key={nextId()}>
                              <a href={navItem.url}>
                                <span>{navItem.text}</span>
                                {navItem.subNav
                                  ? (
                                    <span
                                      className="material-icons nsw-material-icons nsw-main-nav__link-icon"
                                      focusable="false"
                                      aria-hidden="true"
                                    >
                                      keyboard_arrow_right
                                    </span>
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
  <>
    <div className="nsw-main-nav__header">
      <button
        type="button"
        className="nsw-icon-button nsw-icon-button--flex js-close-sub-nav"
        aria-controls={`subnav-${id}`}
        aria-expanded="true"
      >
        <span
          className="material-icons nsw-material-icons"
          focusable="false"
          aria-hidden="true"
        >
          keyboard_arrow_left
        </span>
        <span>
          Back
          <span className="sr-only"> to previous menu</span>
        </span>
      </button>
      <button type="button" className="nsw-icon-button js-close-navigation" aria-expanded="true">
        <i className="material-icons nsw-material-icons" focusable="false" aria-hidden="true">close</i>
        <span className="sr-only">Close Menu</span>
      </button>
    </div>
    <div className="nsw-main-nav__title">
      <a href={url}>
        <span>{text}</span>
        <span
          className="material-icons nsw-material-icons"
          focusable="false"
          aria-hidden="true"
        >
          east
        </span>
      </a>
    </div>
    <div className="nsw-main-nav__description">{description}</div>
  </>
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
    <div className="nsw-main-nav__sub-nav" id={`sub-nav-${id}`} role="region" aria-label={text}>
      <SubNavHeader
        url={url}
        text={text}
        description={description}
        id={id}
      />
      <ul className="nsw-main-nav__sub-list">
        {subNav.map((subNavItem) => (
          <li key={nextId()}>
            <a href={subNavItem.url}>
              <span>
                {subNavItem.text}
              </span>
              {subNavItem.subNav
                ? (
                  <span
                    className="material-icons nsw-material-icons nsw-main-nav__link-icon"
                    focusable="false"
                    aria-hidden="true"
                  >
                    keyboard_arrow_right
                  </span>
                ) : ''}
            </a>

            {subNavItem.subNav ? (
              <div
                className="nsw-main-nav__sub-nav"
                id={`subnav-${nextId()}`}
                role="region"
                aria-label={`${text} Submenu`}
              >
                <SubNavHeader
                  url={url}
                  text={text}
                  description={description}
                />
                <ul className="nsw-main-nav__sub-list">
                  {subNavItem.subNav.map((subSubNavItem) => (
                    <li key={nextId()}>
                      <a href={subSubNavItem.url} className="nsw-subnavigation__link">
                        <span>
                          {subSubNavItem.text}
                        </span>
                        {subSubNavItem.subNav
                          ? (
                            <span
                              className="material-icons nsw-material-icons nsw-main-nav__link-icon"
                              focusable="false"
                              aria-hidden="true"
                            >
                              keyboard_arrow_right
                            </span>
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
