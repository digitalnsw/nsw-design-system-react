import React from 'react';
import { FormGroupSelect } from '../../component/forms/select/formSelect';

export default {
  title: 'Forms and Transactions/Dropdown (select)',
  component: FormGroupSelect,
};

const Template = (args) => <FormGroupSelect {...args} />;

export const AsFormItem = Template.bind({});
AsFormItem.args = {
  label: 'Select a thing',
  helper: 'Select from the list',
  selected: '1',
  options: [
    {
      value: '',
      text: 'Please select',
    },
    {
      value: '1',
      text: 'Option 1',
      selected: 'selected',
    },
    {
      value: '2',
      text: 'Option 2',
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
  helper: 'Select from the list',
  selected: '',
  options: [
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
    },
    {
      value: '3',
      text: 'Option 3',
    },
  ],
};
