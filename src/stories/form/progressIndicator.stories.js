import React from 'react';
import { ProgressIndicator as ProgressIndicatorComponent } from '../../component/forms/progress-indicator/progressIndicator';

export default {
  title: 'Forms and Transactions/Progress Indicator',
  component: ProgressIndicatorComponent,
};

const Template = (args) => <ProgressIndicatorComponent {...args} />;

export const ProgressIndicator = Template.bind({});
ProgressIndicator.args = {
  step: 3,
  of: 5,
};
