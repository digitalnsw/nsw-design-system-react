import React from 'react';
import {FormGroupRadio} from "./";

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
import {FormGroupRadio} from "nsw-design-system-react/components/forms/radio";
\`\`\`

`;

export default {
  title: 'Transaction/Radio',
  component: FormGroupRadio,
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

const Template = (args) => <FormGroupRadio  {...args} />;

export const Group = Template.bind({});
Group.args = {
  label:"Select a thing",
  helper:"And only one thing",
  htmlId:"uniqueID",
  as:"group",
  options:[
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
    }
  ]
};

export const WithError = Template.bind({});
WithError.args = {
  errorText:"Please select an option",
  status:"invalid",
  label:"Select a thing",
  helper:"And only one thing",
  htmlId:"uniqueID",
  as:"group",
  options:[
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
    }
  ]
};
