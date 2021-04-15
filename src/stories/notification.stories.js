import React from 'react';
import { Notification } from '../component/notification/notification';

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
import NSWNotification from "nsw-design-system-react/components/notification";
\`\`\`

`;

export default {
  title: 'Content/Notification',
  component: Notification,
  parameters: {
    docs: {
      description: {
        component: Preamble,
      },
    },
  },
};

const Template = (args) => <Notification {...args} />;

export const Info = Template.bind({});
Info.args = {
  as: 'info',
  title: 'Info alert',
  children: <p>Content of alert</p>,
};

export const Error = Template.bind({});
Error.args = {
  as: 'error',
  title: 'Error alert',
  children: <p>Content of alert</p>,
};

export const Warning = Template.bind({});
Warning.args = {
  as: 'warning',
  title: 'Warning alert',
  children: <p>Content of alert</p>,
};

export const Success = Template.bind({});
Success.args = {
  as: 'success',
  title: 'Success alert',
  children: <p>Content of alert</p>,
};
