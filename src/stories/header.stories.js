import React from 'react'
import { Header } from '../component/header/header'
import { Masthead } from '../component/header/masthead'
import { Skipto } from '../component/header/skip'

export default {
  title: 'Globals/Header',
  component: Header
}

const Template = (args) => (
  <>
    <Skipto nav='#nav' content='#content' />
    <Masthead />
    <Header {...args} />
  </>
)

export const WithoutSearch = Template.bind({})
WithoutSearch.args = {
  search: true,
  mobile: true,
  logo:
    'https://www.digital.nsw.gov.au/themes/custom/corporateplus/nsw-digitalnsw-combined.svg',
  logoUrl: '#'
}

export const WithoutMobileMenu = Template.bind({})
WithoutMobileMenu.args = {
  mobile: false,
  logo:
    'https://www.digital.nsw.gov.au/themes/custom/corporateplus/nsw-digitalnsw-combined.svg',
  logoUrl: '#'
}
