import React from 'react';
import { InpageNavLinks as InpageNavLinksComp } from "./inPageNavLinks";

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
        }
      },
    },
};

const Template = (args) => <InpageNavLinksComp  {...args} />;

export const InpageNavLinks = Template.bind({});
InpageNavLinks.args = {
    sections: [
      {
        link: 'section1',
        title: 'Section 1',
      },
      {
        link: 'section2',
        title: 'Section 2',
      },
    ]
};
