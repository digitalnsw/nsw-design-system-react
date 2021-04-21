import React from 'react';
import * as Tab from '../component/tabs/tabs'

export default {
  title: 'Content/Tabs',
  component: Tab,
};

const Template = () => (
  <Tab.Tabs>
    <Tab.TabItemWrapper>
      <Tab.TabItem title="New and existing home" urlHash="tab1" />
      <Tab.TabItem title="Vacant land" urlHash="tab2" />
    </Tab.TabItemWrapper>
    <Tab.TabSection urlHash="tab1">
      <h2>New and existing homes</h2>
      <p>
        As a first home buyer, you may be eligible for a
        <a href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/transfer-duty"> transfer duty </a>
        concession or exemption.
      </p>
      <ul>
        <li>If your home is valued at less than $650,000, you can apply for a full exemption so that you don’t have to pay transfer duty.</li>
        <li>If the value of your home is between $650,000 and $800,000, you can apply for a concessional rate of transfer duty. The amount you’ll have to pay will be based on the value of your home.</li>
      </ul>
    </Tab.TabSection>
    <Tab.TabSection urlHash="tab2">
      <h2>Vacant land</h2>
      <p>The FHBAS applies to vacant land on which you plan to build your home.</p>
      <ul>
        <li>You won’t pay any <a href="https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/transfer-duty">transfer duty</a> if your land is valued at less than $350,000.
        </li>
        <li>For land valued between $350,000 and $450,000, you’ll receive a concessional rate.</li>
      </ul>
    </Tab.TabSection>
  </Tab.Tabs>
);

export const Tabs = Template.bind({});
