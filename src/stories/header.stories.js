import React from 'react'
import { Header } from '../component/header/header'
import { Masthead } from '../component/header/masthead'
import { SkipTo } from '../component/header/skipTo'

export default {
  title: 'Globals/Header',
  component: Header
}

const Template = (args) => (
  <>
    <SkipTo nav='#nav' content='#content' />
    <Masthead />
    <Header {...args} />
  </>
)

export const WithoutSearch = Template.bind({})
WithoutSearch.args = {
  search: true,
  onSubmit: (event) => {
    event.preventDefault()
    console.log(event.target.searchInput.value)
  },
  mobile: true,
  logo:
    'https://www.digital.nsw.gov.au/themes/custom/corporateplus/nsw-digitalnsw-combined.svg',
  headerUrl: '#',
  department: 'digital.nsw'
}

export const WithoutMobileMenu = Template.bind({})
WithoutMobileMenu.args = {
  mobile: false,
  department: 'digital.nsw',
  logo:
    'https://www.digital.nsw.gov.au/themes/custom/corporateplus/nsw-digitalnsw-combined.svg',
  headerUrl: '#'
}
