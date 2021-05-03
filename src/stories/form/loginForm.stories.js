import React from 'react'
import Button from '../../component/button/button'
import { FormGroupText } from '../../component/forms/index'

export default {
  title: 'Forms and Transactions/Sign up form',
  component: FormGroupText
}

const LoginTemplate = () => (
  <div className='nsw-section--box'>
    <form className='nsw-form' onSubmit={console.log('submit')}>
      <FormGroupText htmlId='username' label='Username' />
      <FormGroupText htmlId='email' label='Email' />
      <FormGroupText
        helper='Must be at least 8 characters'
        htmlId='password'
        label='Password'
      />
      <Button type='submit'>Sign Up</Button>
    </form>
  </div>
)

export const LoginForm = LoginTemplate.bind({});
