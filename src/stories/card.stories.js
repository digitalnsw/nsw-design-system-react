import React from 'react';
import Card, { CardCopy } from '../component/card/card';

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
import Card, {CardCopy} from "nsw-design-system-react/components/card";
\`\`\`

`;

export default {
  title: 'Content/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: Preamble,
      },
      source: {
      },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  link: '/',
  headline: 'Energy Save',
  content: true,
  children: <CardCopy>Helps you compare electricity and gas and switch providers.</CardCopy>,
};

export const Highlight = Template.bind({});
Highlight.args = {
  link: '/',
  headline: 'Family Rebate',
  children: <CardCopy>Helps families with dependants to pay their energy bills.</CardCopy>,
};

export const AllFeatures = Template.bind({});
AllFeatures.args = {
  date: new Date().toLocaleDateString('en-au'),
  tag: 'Environment',
  link: '#',
  headline: 'Quality spaces and a million more trees for NSW',
  image: 'https://picsum.photos/id/292/400/200',
  imageAlt: 'Green space',
  children: <CardCopy>The NSW Government will create more quality green spaces.</CardCopy>,
};
