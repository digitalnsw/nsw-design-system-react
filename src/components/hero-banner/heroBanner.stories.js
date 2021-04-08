import React from 'react';
import { HeroBanner } from './heroBanner';
import { HeroBannerList } from './heroBannerList';

export default {
  title: 'Content/Hero Banner',
  components: HeroBanner,
  HeroBannerList,
};

const Template = (args) => (
  <HeroBanner {...args} />
);

const BannerLinkList = (args) => (
  <HeroBanner {...args}>
    <HeroBannerList subtitle="Coronavirus links">
      <ul>
        <li><a href="/">COVIDSafe App</a></li>
        <li><a href="/">Current COVID-19 case locations</a></li>
        <li><a href="/">Travel to and from NSW</a></li>
        <li><a href="/">Health and wellbeing</a></li>
        <li><a href="/">Business and work</a></li>
        <li><a href="/">COVID-19 testing centres</a></li>
      </ul>
    </HeroBannerList>
  </HeroBanner>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Helping you deliver great government services',
  intro: 'Find the building blocks for creating user-centred digital services, as well as policy, tools and guidance',
  cta: { url: '/', text: 'Learn more' },
  image: { src: 'https://picsum.photos/id/237/2000/1250', alt: 'Labrador dog' },
};

export const Dark = Template.bind({});

Dark.args = {
  title: 'Helping you deliver great government services',
  dark: true,
  intro: 'Find the building blocks for creating user-centred digital services, as well as policy, tools and guidance',
  cta: { url: '/', text: 'Learn more' },
  image: { src: 'https://picsum.photos/id/237/2000/1250', alt: 'Labrador dog' },
};

export const LinkList = BannerLinkList.bind({});

LinkList.args = {
  title: 'Helping you deliver great government services',
  intro: 'Find the building blocks for creating user-centred digital services, as well as policy, tools and guidance',
};
