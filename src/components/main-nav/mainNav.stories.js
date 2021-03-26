import React from 'react';
import { MainNav } from "./mainNav";


export default {
    title: 'Navigation/MainNav',
    component: MainNav,
};

const Template = () => (
    <MainNav navItems={[
        {
            "text": "About DPC",
            "url": "http://google.com",
        },
        {
            "text": "Updates",
            "url": "/index.html#updates"
        },
        {
            "text": "Publications",
            "url": "/index.html#publications"
        },
        {
            "text": "Tools & Resources",
            "url": "/index.html#tools-resources"
        },
        {
            "text": "Contact us",
            "url": "/index.html#contact-us"
        }
    ]}/>
);

export const MainNavigation = Template.bind({});