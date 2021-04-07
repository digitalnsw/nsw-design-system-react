import React from 'react';
import PropTypes from 'prop-types';

export const ProgressIndicator = ({ step, of, ...attributeOptions }) => (
  <div className="nsw-progress-indicator" {...attributeOptions}>
    <div className="nsw-progress-indicator__count">
      Step { step } of { of }
    </div>
    <div className="nsw-progress-indicator__bar">
      {
      [...Array(step)].map(() => <ProgressIndicatorStep active />)
    }
      {
      Array(of - step).fill(<ProgressIndicatorStep />)
    }
    </div>
  </div>
);
ProgressIndicator.propTypes = {
  step: PropTypes.number.isRequired,
  of: PropTypes.number.isRequired,
};

export const ProgressIndicatorStep = ({ active }) => (
  <div className={`nsw-progress-indicator__step ${active ? 'nsw-progress-indicator__step--active' : ''}`} />
);

ProgressIndicatorStep.propTypes = {
  active: PropTypes.string,
};
