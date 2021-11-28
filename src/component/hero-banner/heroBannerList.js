import PropTypes from 'prop-types';
import React from 'react';

export const HeroBannerList = ({ subtitle, children }) => (
  <div className="nsw-hero-banner__links">
    <div className="nsw-hero-banner__list">
      <div className="nsw-hero-banner__sub-title">{subtitle}</div>
      {children}
    </div>
  </div>
);

HeroBannerList.propTypes = {
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HeroBannerList;
