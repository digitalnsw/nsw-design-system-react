import React from 'react';
import { Accordion as AccordionComponent, AccordionGroup } from './accordion';

const Preamble = `
### Full documentation

For usage, UX guidelines, and a library of usability testing visit the NSW Design System docs.

### Installing

Our design system react kit comes with all components

\`\`\`bash
npm install nsw-design-system-react
\`\`\`

### Importing

To import this component

\`\`\`javascript
import Accordion from "nsw-design-system/components/accordion";
\`\`\`
`;

export default {
  title: 'Content/Accordion',
  component: AccordionComponent,
  parameters: {
    docs: {
      description: {
        component: Preamble,
      },
    },
  },
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
