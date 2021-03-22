import React from 'react';
import { ProgressIndicator as ProgressIndicatorComponent } from "./progressIndicator";

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
import ProgressIndicator from "nsw-design-system-react/components/forms/progress-indicator";
\`\`\`

`;


export default {
    title: 'Transaction/Progress Indicator',
    component: ProgressIndicatorComponent,
    parameters: {
      docs: {
        description: {
          component: Preamble,
        }
      },
    },
};

const Template = (args) => <ProgressIndicatorComponent  {...args} />;



export const ProgressIndicator = Template.bind({});
ProgressIndicator.args = {
    step: 3,
    of: 5
};
