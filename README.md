
> [!NOTE]
> This repository has been archived by the NSW Design System team on May 9, 2023, and is now in a read-only state. While no further updates or contributions will be accepted, the existing content remains available for reference.
> 
> Feel free to explore the repository to access historical information and resources. While it won't receive any new updates, you can still review the codebase and discussions that took place in the past.
> 
> If you have questions related to the repository's content or its context, please consult the available documentation or use the issue tracker for assistance. This repository's content can serve as a resource for learning and inspiration for future projects. Thank you for your interest in this repository, and we hope it continues to be a useful resource for the development community.

# NSW Design System React Library

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
