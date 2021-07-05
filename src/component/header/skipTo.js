import PropTypes from 'prop-types'
import * as React from 'react'

export const SkipTo = ({ nav, content }) => (
  <nav className="nsw-skipto nsw-container" aria-label="Skip to links">
    <a className="nsw-skipto__link" href={nav}><span>Skip to navigation</span></a>
    <a className="nsw-skipto__link" href={content}><span>Skip to content</span></a>
  </nav>
)

SkipTo.propTypes = {
  nav: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
