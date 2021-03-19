import React from 'react';
import NSWButton from "../components/button";

export default {
  title: 'Example/Button',
  component: NSWButton,
  argTypes: {
  },
};

const Template = (args) => <NSWButton  {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button'
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  link: '/',
  children: 'Button Link'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  as: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Button',
  as: 'danger',
};

export const White = Template.bind({});
White.args = {
  children: 'Button',
  as: 'white',
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  children: 'Button',
  as: 'full-width',
};