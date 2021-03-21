import React from 'react';
import { Header, Logo } from './';

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
import Header from "nsw-design-system/components/header";
\`\`\`
`;

export default {
  title: 'Templates/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: Preamble
      },
    },
  },
};

const Template = (args) => <Header {...args} />;

export const WithoutSearch = Template.bind({});
WithoutSearch.args = {
  hideSearch: true,
  logo: Logo
};

export const WithoutMobileMenu = Template.bind({});
WithoutMobileMenu.args = {
  hideMobileMenu: true,
  logo: Logo
};
