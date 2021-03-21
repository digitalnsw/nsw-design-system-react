import React from 'react';
import PropTypes from 'prop-types';

export const ProgressIndicator = ({ step, of, ...attributeOptions }) => (
  <div class="nsw-progress-indicator">
  <div class="nsw-progress-indicator__count">Step { step } of { of }</div>
  <div class="nsw-progress-indicator__bar">
    {
      [...Array(step)].map((e, i) => <ProgressIndicatorStep active />)
    }
    {
      Array(of - step).fill(<ProgressIndicatorStep />)
    }
  </div>
</div>
);
ProgressIndicator.propTypes = {
  step: PropTypes.number,
  of: PropTypes.number,
};

export const ProgressIndicatorStep = ({ active }) => (
  <div class={`nsw-progress-indicator__step ${ active ? 'nsw-progress-indicator__step--active' : ''}`}></div>
);
