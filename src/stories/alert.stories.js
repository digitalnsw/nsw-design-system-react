import React from 'react';
import { Alert } from '../component/alert/alert';

export default {
  title: 'Content/In-page Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  as: 'info',
  title: 'Info alert',
  children: <p>Content of alert</p>,
};

export const Error = Template.bind({});
Error.args = {
  as: 'error',
  title: 'Error alert',
  children: <p>Content of alert</p>,
};

export const Warning = Template.bind({});
Warning.args = {
  as: 'warning',
  title: 'Warning alert',
  children: <p>Content of alert</p>,
};

export const Success = Template.bind({});
Success.args = {
  as: 'success',
  title: 'Success alert',
  children: <p>Content of alert</p>,
};
