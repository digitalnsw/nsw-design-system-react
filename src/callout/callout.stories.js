import React from 'react';
import { Callout as CalloutComponent } from './callout';

export default {
  title: 'Content/Callout',
  component: CalloutComponent,
};

const Template = (args) => <CalloutComponent {...args} />;

export const Callout = Template.bind({});
Callout.args = {
  title: 'Title',
  children: <p>This is a callout</p>,
};
