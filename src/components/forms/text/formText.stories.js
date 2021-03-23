import React from 'react';
import { FormGroupText } from "./formText";

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
import {FormGroupText} from "nsw-design-system-react/components/forms/text";
\`\`\`

`;

export default {
  title: 'Transaction/Text',
  component: FormGroupText,
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

const Template = (args) => <FormGroupText  {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  label:"Your name",
  helper:"as it appears on your birth certificate",
  htmlId: "uniqueID"
};

export const MultipleLine = Template.bind({});
MultipleLine.args = {
  label:"Your name",
  helper:"as it appears on your birth certificate",
  htmlId: "uniqueID-2",
  as: "textarea"
};

export const WithError = Template.bind({});
WithError.args = {
  label:"Your name",
  helper:"as it appears on your birth certificate",
  errorText:"Please enter your name",
  htmlId: "uniqueID-3",
  status:"invalid"
};
