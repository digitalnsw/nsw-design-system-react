import React from 'react';
import {
  Accordion as AccordionComponent,
  AccordionGroup
} from '../component/accordion/accordion'

export default {
  title: 'Content/Accordion',
  component: AccordionComponent,
};

const Template = (args) => (
  <AccordionGroup>
    {args.items.map((item, index) => (
      <AccordionComponent key={index} body={item.body} header={item.header} />
    ))}
  </AccordionGroup>
);

const SingleTemplate = (args) => (
  <AccordionGroup>
    <AccordionComponent {...args} />
  </AccordionGroup>
);

export const AccordionSingle = SingleTemplate.bind({})
export const Accordion = Template.bind({});

Accordion.args = {
  items: [
    {
      header: 'This is an accordion',
      body: 'This is the body of an accordion'
    },
    {
      header: 'This is an accordion',
      body: 'This is the body of an accordion'
    },
    {
      header: 'This is an accordion',
      body: 'This is the body of an accordion'
    },
  ],
};

AccordionSingle.args = {
  header: 'This is a single accordion',
  body: 'This is the body of a single accordion'
}
