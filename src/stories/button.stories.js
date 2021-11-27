import React from 'react';
import { Button } from '../component/button/button';

export default {
  title: 'Content/Button',
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

export const DarkOutline = Template.bind({});
DarkOutline.args = {
  children: 'Button',
  as: 'dark-outline',
};

export const DarkOutlineSolid = Template.bind({});
DarkOutlineSolid.args = {
  children: 'Button',
  as: 'dark-outline-solid',
};

export const Light = Template.bind({});
Light.args = {
  children: 'Button',
  as: 'light',
};

export const LightOutline = Template.bind({});
LightOutline.args = {
  children: 'Button',
  as: 'light-outline',
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
