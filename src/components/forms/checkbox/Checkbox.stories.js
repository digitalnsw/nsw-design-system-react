import React from 'react';
import {FormGroupCheckbox} from "./";

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
import {FormGroupCheckbox} from "nsw-design-system-react/components/forms/checkbox";
\`\`\`

`;

export default {
  title: 'Transaction/Checkboxes',
  component: FormGroupCheckbox,
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

const Template = (args) => <FormGroupCheckbox  {...args} />;

export const Group = Template.bind({});
Group.args = {
  label:"Select a thing",
  helper:"Or more than one thing",
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

export const Single = Template.bind({});
Single.args = {
  label:"Select a thing",
  htmlId:"uniqueID-2",
  options:[
    {
      value: '1',
      text: 'Option 1',
    }
  ]
};

export const GroupError = Template.bind({});
GroupError.args = {
  errorText:"Please select at least one option",
  status:"invalid",
  label:"Select a thing",
  helper:"Or more than one thing",
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

export const SingleError = Template.bind({});
SingleError.args = {
  errorText:"You must accept to continue",
  status:"invalid",
  label:"Select a thing",
  htmlId:"uniqueID-2",
  options:[
    {
      value: '1',
      text: 'Accept the terms of this checkbox',
    }
  ]
};
