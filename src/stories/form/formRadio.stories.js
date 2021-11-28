import React from 'react';
import { FormGroupRadio } from '../../component/forms/radio/formRadio';

export default {
  title: 'Forms and Transactions/Radio',
  component: FormGroupRadio,
};

const Template = (args) => <FormGroupRadio {...args} />;

export const Group = Template.bind({});
Group.args = {
  label: 'Select a thing',
  helper: 'And only one thing',
  htmlId: 'uniqueID',
  as: 'group',
  options: [
    {
      value: '1',
      text: 'Option 1',
    },
    {
      value: '2',
      text: 'Option 2',
      selected: 'selected',
    },
    {
      value: '3',
      text: 'Option 3',
    },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  statusText: 'Please select an option',
  status: 'invalid',
  label: 'Select a thing',
  helper: 'And only one thing',
  htmlId: 'uniqueID',
  as: 'group',
  options: [
    {
      value: '1',
      text: 'Option 1',
    },
    {
      value: '2',
      text: 'Option 2',
      selected: 'selected',
    },
    {
      value: '3',
      text: 'Option 3',
    },
  ],
};
