import * as React from "react"
import PropTypes from "prop-types"
import { initSite } from "nsw-design-system/src/main"

/**
 * Displays across the top of all NSW Government sites
 *
 * @param  {string}   department       - Department name
 * @param  {string}   logo             - Location of the logo file
 * @param  {string}   headerUrl        - Link to the homepage or root url
 * @param  {string}   mobile           - Show responsive mobile menu
 * @param  {string}   search           - Show search bar menu
 * @param  {func}     onSubmit         - Event handler for header search
 * @param  {object}   attributeOptions - Any other attribute options
 */
export class Header extends React.Component {
  constructor(props) {
    super(props)
    const {
      department,
      logo,
      headerUrl,
      mobile,
      search,
      onSubmit,
      ...attributeOptions
    } = props
    this.department = department
    this.logo = logo
    this.headerUrl = headerUrl
    this.mobile = mobile
    this.search = search
    this.attributeOptions = attributeOptions
    this.onSubmit = onSubmit
  }

  componentDidMount() {
    if (this.search) {
      initSite()
    }
  }

  render() {
    return (
      <React.Fragment>
        <header className="nsw-header" {...this.attributeOptions}>
          <div className="nsw-header__container">
            <div className="nsw-header__wrapper">
              <div className="nsw-header__center">
                <a href={this.headerUrl} className="nsw-header__logo-link">
                  <div className="nsw-header__logo-image">
                    <img src={this.logo} alt={this.department + "logo"} />
                  </div>
                  <span className="sr-only">{this.department}</span>
                </a>
              </div>
              {this.mobile ? (
                <div className="nsw-header__left">
                  <button
                    type="button"
                    className="nsw-header-btn nsw-header-btn--menu js-open-navigation"
                    aria-expanded="false"
                    aria-controls="main-navigation"
                  >
                    <i
                      className="material-icons nsw-material-icons nsw-header-btn__icon"
                      focusable="false"
                      aria-hidden="true"
                    >
                      menu
                    </i>
                    <span className="nsw-header-btn__sub">
                      <span className="sr-only">Open</span> Menu
                    </span>
                  </button>
                </div>
              ) : (
                ""
              )}
              {this.search ? (
                <div className="nsw-header__right">
                  <button
                    type="button"
                    className="nsw-header-btn nsw-header-btn--search js-open-search"
                    aria-expanded="false"
                    aria-controls="header-search"
                  >
                    <i
                      className="material-icons nsw-material-icons nsw-header-btn__icon"
                      focusable="false"
                      aria-hidden="true"
                    >
                      search
                    </i>
                    <span className="nsw-header-btn__sub">
                      <span className="sr-only">Show</span> Search
                    </span>
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            {this.search ? (
              <div className="nsw-search">
                <div
                  id="header-search"
                  className="nsw-search__area js-search-area"
                  hidden
                >
                  <form role="search" onSubmit={this.onSubmit}>
                    <label htmlFor="nsw-search__input" className="sr-only">
                      Search site for:
                    </label>
                    <input
                      autoComplete="off"
                      className="nsw-search__input js-search-input"
                      id="nsw-search__input"
                      name="searchInput"
                      type="text"
                    />
                    <button
                      className="nsw-search__submit"
                      type="submit"
                      aria-label="search"
                    >
                      <i
                        className="material-icons nsw-material-icons nsw-search__search-icon"
                        focusable="false"
                        aria-hidden="true"
                      >
                        search
                      </i>
                    </button>
                  </form>
                  <button
                    className="nsw-search__close-btn js-close-search"
                    aria-expanded="true"
                    aria-controls="header-search"
                  >
                    <i
                      className="material-icons nsw-material-icons nsw-search__close-icon"
                      focusable="false"
                      aria-hidden="true"
                    >
                      close
                    </i>
                    <span className="sr-only">Close search</span>
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </header>
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  department: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  headerUrl: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
  search: PropTypes.bool,
  onSubmit: PropTypes.func
}

Header.defaultProps = {
  search: true,
  mobile: true
}

export default Header
