import React from 'react';
import { FormGroupCheckbox } from '../../component/forms/checkbox/formCheckbox';

export default {
  title: 'Forms and Transactions/Checkboxes',
  component: FormGroupCheckbox,
};

const Template = (args) => <FormGroupCheckbox {...args} />;

export const Group = Template.bind({});
Group.args = {
  label: 'Select a thing',
  helper: 'Or more than one thing',
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

export const Single = Template.bind({});
Single.args = {
  label: 'Select a thing',
  htmlId: 'uniqueID-2',
  options: [
    {
      value: '1',
      text: 'Option 1',
    },
  ],
};

export const GroupError = Template.bind({});
GroupError.args = {
  statusText: 'Please select at least one option',
  status: 'invalid',
  label: 'Select a thing',
  helper: 'Or more than one thing',
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

export const SingleSuccess = Template.bind({});
SingleSuccess.args = {
  statusText: 'Terms & conditions accepted',
  status: 'valid',
  label: 'Legal stuff',
  htmlId: 'uniqueID-2',
  options: [
    {
      value: '1',
      text: 'Accept the terms of this checkbox',
      checked: true,
    },
  ],
};
