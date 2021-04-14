import React from 'react';
import { Breadcrumbs as BreadcrumbsComponent } from '../component/breadcrumbs/breadcrumb';

export default {
  title: 'Content/Breadcrumb',
  component: BreadcrumbsComponent,
};

const Template = (args) => <BreadcrumbsComponent {...args} />;

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  items: [
    {
      link: 'breadcrumb/one/',
      text: 'Home',
    },
    {
      link: 'breadcrumb/two/',
      text: 'About DPC',
    },
    {
      link: 'breadcrumb/three/',
      text: 'NSW Digital Design System',
    },
  ],
};
