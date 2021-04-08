import React from 'react';
import { Breadcrumbs as BreadcrumbsComponent } from './breadcrumb';

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
  component: BreadcrumbsComponent,
  parameters: {
    docs: {
      description: {
        component: Preamble,
      },
    },
  },
};

const Template = (args) => <BreadcrumbsComponent {...args} />;

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  items: [
    {
      link: 'breadcrumb/one/',
      text: 'Home',
    },
    {
      link: 'breadcrumb/two/',
      text: 'About DPC',
    },
    {
      link: 'breadcrumb/three/',
      text: 'NSW Digital Design System',
    },
  ],
};
