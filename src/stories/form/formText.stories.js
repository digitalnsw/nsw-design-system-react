import React from 'react';
import nextId from 'react-id-generator';
import { FormGroupText } from '../../component/forms/text/formText';

export default {
  title: 'Forms and Transactions/Text Input',
  component: FormGroupText,
};

const Template = (args) => <FormGroupText {...args} />;

export const SingleLine = Template.bind({});
SingleLine.args = {
  label: 'Your name',
  helper: 'as it appears on your birth certificate',
  htmlId: nextId(),
};

export const MultipleLine = Template.bind({});
MultipleLine.args = {
  label: 'Your name',
  helper: 'as it appears on your birth certificate',
  htmlId: nextId(),
  as: 'textarea',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Email',
  inputType: 'email',
  htmlId: nextId(),
  status: 'valid',
  statusText: 'Valid email address'
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Password',
  inputType: 'password',
  htmlId: nextId(),
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Your name',
  helper: 'as it appears on your birth certificate',
  statusText: 'Please enter your name',
  htmlId: nextId(),
  status: 'invalid',
};
