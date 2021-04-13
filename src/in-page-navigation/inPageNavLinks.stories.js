import React from 'react';
import { InPageNavLinks as InPageNavLinksComp } from './inPageNavLinks';

export default {
  title: 'Content/Inpage Nav Links',
  component: InPageNavLinksComp,
};

const Template = (args) => <InPageNavLinksComp {...args} />;

export const InPageNavLinks = Template.bind({});
InPageNavLinks.args = {
  title: 'On this page',
  links: [
    {
      url: '/',
      title: 'First home buyer grant and assistance',
    },
    {
      url: '/',
      title: 'Buying and selling property',
    },
    {
      url: '/',
      title: 'Building or renovating a home',
    },
    {
      url: '/',
      title: 'Aged care housing, home living assistance and retirement villages',
    },
  ],
};
