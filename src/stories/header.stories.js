import React from 'react'
import { Header } from '../component/header/header'
import { Masthead } from '../component/header/masthead'
import { SkipTo } from '../component/header/skipTo'
import scLogo from './assets/seniorscardlogo.png';

export default {
  title: 'Globals/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          'Displays across the top of all NSW Government sites. For mobile menu to work, add the main navigation component'
      }
    }
  }
}

const Template = (args) => (
  <>
    <SkipTo nav='#nav' content='#content' />
    <Masthead />
    <Header {...args} />
  </>
)

export const Search = Template.bind({})
Search.args = {
  headerUrl: '#',
  siteTitle: 'digital.nsw',
  siteDescriptor: 'Department of Customer Service',
  search: true,
  mobile: true,
  onSubmit: (event) => {
    event.preventDefault()
    console.log(event.target.searchInput.value)
  },
}

export const Simple = Template.bind({})
Simple.args = {
  logo:
    scLogo,
  headerUrl: '#',
  siteTitle: 'Seniors Card NSW',
  mobile: false,
  search: false
}
