import React from 'react';
import { Button } from './button';

export default {
  title: 'Transaction/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  link: '/',
  children: 'Button Link',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  as: 'secondary',
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
