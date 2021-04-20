import React from 'react';
import { InPageNavLinks as InPageNavLinksComp } from '../component/in-page-navigation/inPageNavLinks';

export default {
  title: 'Navigation/Inpage Nav Links',
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
