import React from 'react';
import NSWCallout from "../components/callout";

export default {
    title: 'Example/Callout',
    component: NSWCallout,
    argTypes: {
    },
};

const Template = (args) => <NSWCallout  {...args} />;

export const Callout = Template.bind({});
Callout.args = {
    title: 'Title',
};