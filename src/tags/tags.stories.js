import React from 'react';
import TagList from './tags';

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
import TagList from "nsw-design-system-react/components/tags";
\`\`\`

`;

export default {
  title: 'Content/Tags',
  component: TagList,
  parameters: {
    docs: {
      description: {
        component: Preamble,
      },
    },
  },
};

const Template = (args) => <TagList {...args} />;

export const Tags = Template.bind({});
Tags.args = {
  tags: [
    {
      text: 'foo',
    },
    {
      text: 'bar',
    },
    {
      text: 'baz',
    },
  ],
};
