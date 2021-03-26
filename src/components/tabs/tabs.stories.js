import React from 'react';
import {TabItem, TabItems, TabSection, Tabs as TabsComponent} from "./tabs";

export default {
    title: 'Content/Tabs',
    component: TabsComponent,
};

const Template = () => (
    <TabsComponent>
        <TabItems>
            <TabItem title='Tab 1' urlHash='tab1'></TabItem>
            <TabItem title='Tab 2' urlHash='tab2'></TabItem>
        </TabItems>
        <TabSection urlHash='tab1'>This is a tab 1 content</TabSection>
        <TabSection urlHash='tab2'>This is a tab 2 content</TabSection>
    </TabsComponent>
);

export const Tabs = Template.bind({});