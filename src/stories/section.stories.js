import React from 'react';
import Section from '../component/section/section';

export default {
  title: 'Content/Section',
  component: Section,
};

const Template = (args) => <Section {...args} />;

export const White = Template.bind({});
White.args = {
  children: <p>Content of section</p>,
};

export const Dark = Template.bind({});
Dark.args = {
  style: 'brand-dark',
  children: <p>Content of section</p>,
};

export const InlineBox = Template.bind({});
InlineBox.args = {
  style: 'grey-01',
  box: true,
  children: <p>Content of section</p>,
};
