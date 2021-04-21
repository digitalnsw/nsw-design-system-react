import React from 'react';
import nextId from 'react-id-generator';
import { FormGroupText } from '../../component/forms/text/formText';

export default {
  title: 'Forms and Transactions/Text',
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

export const WithError = Template.bind({});
WithError.args = {
  label: 'Your name',
  helper: 'as it appears on your birth certificate',
  errorText: 'Please enter your name',
  htmlId: nextId(),
  status: 'invalid',
};
