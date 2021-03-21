import React from 'react';
import Button from "../components/button";

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
import Button from "nsw-design-system-react/components/button";
\`\`\`

`;

export default {
  title: 'Transaction/Button',
  component: Button,
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

const Template = (args) => <Button  {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button'
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  link: '/',
  children: 'Button Link'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  as: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Button',
  as: 'danger',
};

export const White = Template.bind({});
White.args = {
  children: 'Button',
  as: 'white',
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  children: 'Button',
  as: 'full-width',
};
