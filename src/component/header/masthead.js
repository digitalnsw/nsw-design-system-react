import PropTypes from 'prop-types'
import * as React from 'react'

export const Masthead = ({ text }) => (
  <div className="nsw-masthead">
    <div className="nsw-container">
      <p>{text}</p>
    </div>
  </div>
)

Masthead.propTypes = {
  text: PropTypes.string
}

Masthead.defaultProps = {
  text: 'A NSW Government website'
}
