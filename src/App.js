import 'nsw-design-system/src/main.scss'
import React from "react";
import Button from './components/button';
import NSWNotification from './components/notification';
import NSWTagList, {Tag} from './components/tags';
import NSWCallout from './components/callout';
import NSWInpageNavLinks from './components/in-page-navigation';
import NSWBreadcrumbs from './components/breadcrumbs';
import NSWLinkList from './components/link-list';
import NSWCard, { CardContent, CardHeader, CardCopy, CardTag, CardDate } from './components/card';
import NSWAccordion from "./components/accordion";
import nextId from "react-id-generator";
import * as Form from  './components/forms';

function App() {

  return (
    <div className="App">
      <div class="nsw-container">
        <h2 class="section-title">Accordion</h2>
        <NSWAccordion contents={[
            {
                header: 'This is an accordion',
                body: 'This is a body content of an accordion'
            },
            {
                header: 'This is an accordion',
                body: 'This is a body content of an accordion'
            },
            {
                header: 'This is an accordion',
                body: 'This is a body content of an accordion'
            },
        ]}/>
        <h2 class="section-title">Buttons</h2>
        <Button>Primary button</Button>
        <Button as='secondary'>Secondary button</Button>
        <Button as='danger'>Danger button</Button>

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
        <h2 className="section-title">Text form groups</h2>
        <Form.FormGroupText
            label="Your name"
            helper="as it is written on your drivers' licence"
            errorText="Please enter your name"
            htmlId={nextId()}
        />
        <Form.FormGroupText
            label="Enter some long text"
            errorText="the error"
            as="textarea"
            htmlId={nextId()}
        />
        <h2 className="section-title">Select form group</h2>
        <Form.FormGroupSelect
            label="Select a thing"
            helper="But only one thing"
            errorText="Please select a thing"
            htmlId={nextId()}
            options={[
              {
                value: '',
                text: 'Please select',
              },
              {
                value: '1',
                text: 'Option 1',
              },
              {
                value: '2',
                text: 'Option 2',
                selected: 'selected'
              },
              {
                value: '3',
                text: 'Option 3',
              },
            ]}/>



        <Form.FormGroupCheckbox
        label="Select a thing"
        helper="Or more than one thing"
        errorText="Please select at least 1 thing"
        htmlId={nextId()}
        as="group"
        options={[
          {
            value: '1',
            text: 'Option 1',
          },
          {
            value: '2',
            text: 'Option 2',
            selected: 'selected'
          },
          {
            value: '3',
            text: 'Option 3',
          },
        ]}/>


        <Form.FormGroupCheckbox
        label="Select a thing"
        helper="Or more than one thing"
        errorText="Please select at least 1 thing"
        htmlId={nextId()}
        options={[
          {
            value: '1',
            text: `Just a lonely checkbox on it's own`,
          }
        ]}/>

        <Form.FormGroupRadio
        label="Select a thing"
        helper="Only one thing"
        errorText="Please select 1 thing"
        htmlId={nextId()}
        options={[
          {
            value: '1',
            text: 'Option 1',
          },
          {
            value: '2',
            text: 'Option 2',
            selected: 'selected'
          },
          {
            value: '3',
            text: 'Option 3',
          },
        ]}/>


        <h2 className="section-title">Error form group</h2>
        <Form.FormGroupText
        label="Your name"
        helper="as it is written on your drivers' licence"
        errorText="Please enter your name"
        htmlId={nextId()}
        status="invalid"
        />
        <Form.FormGroupText
        label="Enter some long text"
        errorText="the error"
        as="textarea"
        htmlId={nextId()}
        status="invalid"
        />
        <Form.FormGroupSelect
        label="Select a thing"
        helper="But only one thing"
        errorText="Please select a thing"
        htmlId={nextId()}
        status="invalid"
        options={[
          {
            value: '',
            text: 'Please select',
          },
          {
            value: '1',
            text: 'Option 1',
          },
          {
            value: '2',
            text: 'Option 2',
            selected: 'selected'
          },
          {
            value: '3',
            text: 'Option 3',
          },
        ]}/>

        <Form.FormGroupCheckbox
        label="Select a thing"
        helper="Or more than one thing"
        errorText="Please select at least 1 thing"
        htmlId={nextId()}
        status="invalid"
        as="group"
        options={[
          {
            value: '1',
            text: 'Option 1',
          },
          {
            value: '2',
            text: 'Option 2',
            selected: 'selected'
          },
          {
            value: '3',
            text: 'Option 3',
          },
        ]}/>


        <Form.FormGroupCheckbox
        label="Select a thing"
        helper="Or more than one thing"
        errorText="Please select at least 1 thing"
        htmlId={nextId()}
        status="invalid"
        options={[
          {
            value: '1',
            text: `Just a lonely checkbox on it's own`,
          }
        ]}/>

        <Form.FormGroupRadio
        label="Select a thing"
        helper="Only one thing"
        errorText="Please select 1 thing"
        status="invalid"
        htmlId={nextId()}
        options={[
          {
            value: '1',
            text: 'Option 1',
          },
          {
            value: '2',
            text: 'Option 2',
            selected: 'selected'
          },
          {
            value: '3',
            text: 'Option 3',
          },
        ]}/>

        <Form.ProgressIndicator step={3} of={5} />
      </div>
    </div>
  );
}

export default App;
