import * as React from "react"
import PropTypes from "prop-types"
import { initSite } from "nsw-design-system/src/main"

export class Header extends React.Component {
  constructor(props) {
    super(props)
    const {
      department,
      logo,
      headerUrl,
      mobile,
      simple,
      search,
      ...attributeOptions
    } = props
    this.department = department
    this.logo = logo
    this.headerUrl = headerUrl
    this.mobile = mobile
    this.search = search
    this.attributeOptions = attributeOptions
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
                  <form role="search">
                    <label htmlFor="nsw-search__input" className="sr-only">
                      Search site for:
                    </label>
                    <input
                      autoComplete="off"
                      className="nsw-search__input js-search-input"
                      id="nsw-search__input"
                      name="input-autocomplete"
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
  search: PropTypes.bool,
  department: PropTypes.string,
  logo: PropTypes.string,
  logoUrl: PropTypes.string
}

Header.defaultProps = {
  search: true,
  mobile: true
}

export default Header
