import React from 'react';
import { Accordion as AccordionComponent, AccordionGroup } from './accordion';

export default {
  title: 'Content/Accordion',
  component: AccordionComponent,
};

const Template = () => (
  <AccordionGroup>
    <AccordionComponent
      header="This is an accordion"
      body={<p>This is the body of an accordion</p>}
    />
    <AccordionComponent
      header="This is an accordion"
      body={<p>This is the body of an accordion</p>}
    />
    <AccordionComponent
      header="This is an accordion"
      body={<p>This is the body of an accordion</p>}
    />
  </AccordionGroup>
);

export const Accordion = Template.bind({});
