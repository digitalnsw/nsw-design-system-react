import React from 'react';
import { InpageNavLinks as InpageNavLinksComp } from './inPageNavLinks';

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
import InpageNavLinks from "nsw-design-system-react/components/in-page-navigation";
\`\`\`

`;

export default {
  title: 'Content/Inpage Nav Links',
  component: InpageNavLinksComp,
  parameters: {
    docs: {
      description: {
        component: Preamble,
      },
    },
  },
};

const Template = (args) => <InpageNavLinksComp {...args} />;

export const InpageNavLinks = Template.bind({});
InpageNavLinks.args = {
  title: 'On this page',
  links: [
    {
      link: '/',
      title: 'First home buyer grant and assistance',
    },
    {
      link: '/',
      title: 'Buying and selling property',
    },
    {
      link: '/',
      title: 'Building or renovating a home',
    },
    {
      link: '/',
      title: 'Aged care housing, home living assistance and retirement villages',
    },
  ],
};
