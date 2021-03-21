import React from 'react';
import Breadcrumbs from "../components/breadcrumbs";
import { Meta, Story, Canvas, Description } from '@storybook/addon-docs/blocks';

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
import Breadcrumbs from "nsw-design-system/components/breadcrumbs";
\`\`\`

`;


export default {
    title: 'Content/Breadcrumb',
    component: Breadcrumbs,
    parameters: {
      docs: {
        description: {
          component: Preamble,
        }
      },
    },
};

const Template = (args) => <Breadcrumbs  {...args} />;



export const NSWBreadcrumbs = Template.bind({});
NSWBreadcrumbs.args = {
    items: [
      {
        link: 'breadcrumb/one/',
        text: 'breadcrumb 1',
      },
      {
        link: 'breadcrumb/two/',
        text: 'breadcrumb 2',
      },
      {
        text: 'breadcrumb 3',
      },
    ]
};
