import PropTypes from 'prop-types'
import * as React from 'react'

export const SkipTo = ({ nav, content }) => (
  <nav className="nsw-skip" aria-label="Skip to links">
    <a href={nav}><span>Skip to navigation</span></a>
    <a href={content}><span>Skip to content</span></a>
  </nav>
)

SkipTo.propTypes = {
  nav: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
