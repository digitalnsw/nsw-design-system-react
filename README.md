# NSW Design System React Library

[![npm version](https://badge.fury.io/js/nsw-ds-react.svg)](https://badge.fury.io/js/nsw-ds-react)

![alt text](https://www.digital.nsw.gov.au/sites/default/files/2021-04/nsw-ds-react_0.jpg "NSW DS + React Logo")

## Install

```bash
npm install nsw-ds-react nsw-design-system
```


Add the styles separately in your main `App.js` file

```js
import 'nsw-design-system/dist/css/main.css'
```


In your `index.html` document add this line of code inside the `<head>` tag. Or install [icon](https://www.npmjs.com/package/material-icons) and [font](https://www.npmjs.com/package/@fontsource/public-sans) from npm
```
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Usage

Refer to individual components' usage in [Storybook](https://digitalnsw.github.io/nsw-design-system-react)

Here's how you import the component:
```jsx
import React, { Component } from 'react'

import { Callout } from 'nsw-ds-react'

class Example extends Component {
  render() {
    return (
     <Callout title="Title of callout">
       <p>Description of callout</p>
     </Callout>
    )
  }
}
```
## Attribution
The components library is adapted from:

https://github.com/govau/design-system-components/

## License

MIT © [digitalnsw](https://github.com/digitalnsw)
