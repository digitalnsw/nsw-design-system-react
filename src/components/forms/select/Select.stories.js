import React from 'react';
import {FormGroupSelect} from "./";

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
import {FormGroupSelect} from "nsw-design-system-react/components/forms/select";
\`\`\`

`;

export default {
  title: 'Transaction/Dropdown (select)',
  component: FormGroupSelect,
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

const Template = (args) => <FormGroupSelect  {...args} />;

export const AsFormItem = Template.bind({});
AsFormItem.args = {
  label:"Select a thing",
  helper:"Select from the list",
  options:[
    {
      value: '',
      text: 'Please select',
    },
    {
      value: '1',
      text: 'Option 1',
    },
    {
      value: '2',
      text: 'Option 2',
      selected: 'selected'
    },
    {
      value: '3',
      text: 'Option 3',
    },
  ]
};
