import React from 'react'
import Card, { CardCopy } from '../component/card/card'

export default {
  title: 'Content/Card',
  component: Card
}

const Template = (args) => (
  <div className='nsw-grid nsw-grid--spaced'>
    <div className='nsw-col nsw-col-md-6'>
      <Card {...args} />
    </div>
  </div>
)

export const Simple = Template.bind({})
Simple.args = {
  link: '/',
  headline: 'Energy Save',
  content: true,
  children: <CardCopy>Helps you compare electricity and gas and switch providers.</CardCopy>
}

export const Highlight = Template.bind({})
Highlight.args = {
  link: '/',
  headline: 'Family Rebate',
  children: <CardCopy>Helps families with dependants to pay their energy bills.</CardCopy>
}

export const AllFeatures = Template.bind({})
AllFeatures.args = {
  date: new Date().toLocaleDateString('en-au'),
  tag: 'Environment',
  link: '#',
  headline: 'Quality spaces and a million more trees for NSW',
  image: 'https://picsum.photos/id/292/400/200',
  imageAlt: 'Green space',
  children: <CardCopy>The NSW Government will create more quality green spaces.</CardCopy>
}
