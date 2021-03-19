import 'nsw-design-system/dist/css/main.css'
import React from "react";
import NSWButton from './components/button';
import NSWNotification from './components/notification';
import NSWTagList, {Tag} from './components/tags';
import NSWCallout from './components/callout';
import NSWInpageNavLinks from './components/in-page-navigation';
import NSWBreadcrumbs from './components/breadcrumbs';
import NSWLinkList from './components/link-list';
import NSWCard, { CardContent, CardHeader, CardCopy, CardTag, CardDate } from './components/card';

function App() {
  return (
    <div className="App">
      <div class="nsw-container">
        <h2 class="section-title">Buttons</h2>
        <NSWButton>Primary button</NSWButton>
        <NSWButton as='secondary'>Secondary button</NSWButton>
        <NSWButton as='danger'>Danger button</NSWButton>

        <h2 class="section-title">In-page notifications</h2>
        <NSWNotification as='info' title='Info alert'>
          <p>Content of alert</p>
        </NSWNotification>
        <br />
        <NSWNotification as='error' title='Error alert'>
          <p>Content of alert</p>
        </NSWNotification>
        <br />
        <NSWNotification as='warning' title='Warning alert'>
          <p>Content of alert</p>
        </NSWNotification>
        <br />
        <NSWNotification as='success' title='Success alert'>
          <p>Content of alert</p>
        </NSWNotification>

        <h2 class="section-title">Tags</h2>
        <NSWTagList tags={[
          {
            text: 'foo',
          },
          {
            text: 'bar',
          },
          {
            text: 'baz',
          },
        ]} />

        <h2 class="section-title">Callout</h2>
        <NSWCallout title="Title of callout">
            <p>Description of callout</p>
        </NSWCallout>

        <h2 class="section-title">Cards</h2>
        <div class='nsw-grid'>
          <div class='nsw-col nsw-col-md-4'>
            <NSWCard
              date='2021-03-17'
              tag='Environment'
              link='#'
              headline='Card Title'
              image='https://picsum.photos/id/292/400/200'
              imageAlt='alt text'>
                <CardCopy>Some text</CardCopy>
            </NSWCard>
          </div>
        </div>
        <div class='nsw-grid'>
          <div class='nsw-col nsw-col-md-4'>
            <NSWCard content
                     date='2021-03-17'
                     tag='Environment'
                     link='#'
                     headline='Card Title'
                     image='https://picsum.photos/id/292/400/200'
                     imageAlt='alt text'>
                <CardCopy>Some text</CardCopy>
            </NSWCard>
          </div>
        </div>
        <div class='nsw-grid'>
          <div class='nsw-col nsw-col-md-4'>
            <NSWCard content
                     link='#'
                     headline='Card Title'>
                <CardCopy>Some text</CardCopy>
            </NSWCard>
          </div>
        </div>
        <div class='nsw-grid'>
          <div class='nsw-col nsw-col-md-4'>
            <NSWCard
              link='#'
              headline='Card Title'>
                <CardCopy>Some text</CardCopy>
            </NSWCard>
          </div>
        </div>

        <h2 class="section-title">In-page nav</h2>
        <NSWInpageNavLinks sections={[
          {
            link: 'section1',
            title: 'Section 1',
          },
          {
            link: 'section2',
            title: 'Section 2',
          },
        ]} />

        <h2 class="section-title">Breadcrumbs</h2>
        <NSWBreadcrumbs label="Breadcrumb for this page"
                        items={[
            {
              link: '#',
              text: 'Home',
            },
            {
              link: '#',
              text: 'Parent',
            },
            {
              text: 'Current page',
            },
          ]}
        />


        <h2 class="section-title">Link list</h2>
        <NSWLinkList
          items={[
            {
              link: '#',
              text: 'Home',
            },
            {
              link: '#',
              text: 'Parent',
            },
          ]}
        />


      </div>
    </div>
  );
}

export default App;
