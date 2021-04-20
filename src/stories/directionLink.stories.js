import React from 'react';
import { DirectionLink as DirectionLinkComponent, DirectionLinks as DirectionLinksComponent } from '../component/direction-links/directionLink';

export default {
  title: 'Navigation/DirectionLink',
  component: DirectionLinkComponent,
};

const ItemTemplate = (args) => <DirectionLinkComponent {...args} />;
const GroupTemplate = (args) => <DirectionLinksComponent {...args} />;

export const DirectionLink = ItemTemplate.bind({});
export const DirectionLinks = GroupTemplate.bind({});

DirectionLink.args = {
  url: '#',
  direction: 'top',
  text: 'top',
  screenReader: 'of the page',
};

DirectionLinks.args = {
  links: [
    {
      url: '#',
      direction: 'top',
      text: 'Top',
      screenReader: 'of the page',
    },
    {
      url: '#',
      direction: 'bottom',
      text: 'Bottom',
      screenReader: 'of the page',
    },
    {
      url: '#',
      direction: 'left',
      text: 'Next',
      screenReader: 'of the page',
    },
    {
      url: '#',
      direction: 'right',
      text: 'Back',
      screenReader: 'of the page',
    },
  ],
};
