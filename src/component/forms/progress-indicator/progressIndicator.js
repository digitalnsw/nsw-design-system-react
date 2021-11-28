import React from 'react';
import PropTypes from 'prop-types';

export const ProgressIndicator = ({ step, of, ...attributeOptions }) => (
  <div className="nsw-progress-indicator" {...attributeOptions}>
    <div className="nsw-progress-indicator__count">
      Step { step } of { of }
    </div>
    <div className="nsw-progress-indicator__bar">
      {
          // eslint-disable-next-line react/no-array-index-key
          [...Array(of)].fill().map((value, index) => (index + 1 <= step ? <ProgressIndicatorStep key={index} active /> : <ProgressIndicatorStep key={index} />))
        }
    </div>
  </div>
);
ProgressIndicator.propTypes = {
  step: PropTypes.number.isRequired,
  of: PropTypes.number.isRequired,
};

export const ProgressIndicatorStep = ({ active }) => (
  <div className={`${active ? 'active' : ''}`} />
);

ProgressIndicatorStep.propTypes = {
  active: PropTypes.bool,
};
