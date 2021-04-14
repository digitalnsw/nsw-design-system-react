import React from 'react';
import TagList from '../component/tags/tags';

export default {
  title: 'Content/Tags',
  component: TagList,
};

const Template = (args) => <TagList {...args} />;

export const Tags = Template.bind({});
Tags.args = {
  tags: [
    {
      text: 'Digital',
    },
    {
      text: 'Design System',
    },
    {
      text: 'Transformation',
    },
  ],
};
