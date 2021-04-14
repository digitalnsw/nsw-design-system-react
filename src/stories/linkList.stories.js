import React from 'react';
import { LinkList as LinkListComponent } from '../component/link-list/linkList';

export default {
  title: 'Content/Link List',
  component: LinkListComponent,
};

const Template = (args) => <LinkListComponent {...args} />;

export const LinkList = Template.bind({});
LinkList.args = {
  items: [
    {
      link: 'link/one/',
      text: 'Link 1',
    },
    {
      link: 'link/two/',
      text: 'Link 2',
    },
    {
      link: 'link/three/',
      text: 'Link 3',
    },
    {
      link: 'link/four/',
      text: 'Link 4',
    },
    {
      link: 'link/five/',
      text: 'Link 5',
    },
  ],
};
