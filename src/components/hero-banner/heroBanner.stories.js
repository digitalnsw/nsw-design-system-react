import React from 'react';
import HeroBanner from "./heroBanner";
import HeroBannerList from "./heroBannerList";

export default {
    title: 'Content/Hero Banner',
    components: HeroBanner, HeroBannerList,
};

const Template = (args) => (
    <HeroBanner {...args}
    >
    </HeroBanner>
);

const BannerLinkedList = (args) => (
    <HeroBanner {...args}>
        <HeroBannerList subtitle={"Coronavirus links"}>
            <ul>
                <li><a href="#">COVIDSafe App</a></li>
                <li><a href="#">Current COVID-19 case locations</a></li>
                <li><a href="#">Travel to and from NSW</a></li>
                <li><a href="#">Health and wellbeing</a></li>
                <li><a href="#">Business and work</a></li>
                <li><a href="#">COVID-19 testing centres</a></li>
            </ul>
        </HeroBannerList>
    </HeroBanner>
)

export const Default = Template.bind({});

Default.args = {
    title: 'This is a heading',
    intro: 'This is a subheading',
    cta: {url: '#', text: 'tertiary'},
    image: {src: 'https://picsum.photos/id/237/2000/1250', alt: 'Labrador dog'}
}

export const Dark = Template.bind({});

Dark.args = {
    title: 'This is a heading',
    dark: true,
    wide: true,
    intro: 'This is a subheading',
    cta: {url: '#', text: 'tertiary'},
    image: {src: 'https://picsum.photos/id/237/2000/1250', alt: 'Labrador dog'}
}

export const LinkedList = BannerLinkedList.bind({})

LinkedList.args = {
    title: 'This is a heading',
    wide: true,
    intro: 'This is a subheading',
    cta: {url: '#', text: 'tertiary'},
}