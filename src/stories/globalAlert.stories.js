import React from 'react';
import { GlobalAlert } from '../component/global-alert/globalAlert';

export default {
  title: 'Content/GlobalAlert',
  component: GlobalAlert,
};

const Template = (args) => <GlobalAlert {...args} />;

export const Info = Template.bind({});
Info.args = {
  title: 'Title',
  content: 'This is a message',
  ctaText: 'Click me',
};

export const Critical = Template.bind({});
Critical.args = {
  title: 'Title',
  content: 'This is a message',
  ctaText: 'Click me',
  as: 'critical',
};

export const Light = Template.bind({});
Light.args = {
  title: 'Title',
  content: 'This is a message',
  ctaText: 'Click me',
  as: 'light',
};
