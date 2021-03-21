import React from 'react';
import Callout from "./";

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
import Callout from "nsw-design-system/components/callout";
\`\`\`
`;

export default {
    title: 'Content/Callout',
    component: Callout,
    parameters: {
      docs: {
        description: {
          component: Preamble
        },
      },
    },
};

const Template = (args) => <Callout  {...args} />;

export const NSWCallout = Template.bind({});
NSWCallout.args = {
    title: 'Title',
    children: <p>This is a callout</p>
};
