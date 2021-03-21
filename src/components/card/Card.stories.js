import React from 'react';
import Card, {CardCopy} from "./";

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
      }
    }
  }
};

const Template = (args) => <div class='nsw-col nsw-col-md-4'><Card  {...args} /></div>;

export const Simple = Template.bind({});
Simple.args = {
  link: '#',
  headline: 'Card Title',
  content: true,
  children: <CardCopy>Some text</CardCopy>
};

export const Highlight = Template.bind({});
Highlight.args = {
  link: '#',
  headline: 'Card Title',
  children: <CardCopy>Some text</CardCopy>
};

export const AllFeatures = Template.bind({});
AllFeatures.args = {
  date: '2021-03-17',
  tag: 'Environment',
  link: '#',
  headline: 'Card Title',
  image: 'https://picsum.photos/id/292/400/200',
  imageAlt: 'alt text',
  children: <CardCopy>Some text</CardCopy>
};
