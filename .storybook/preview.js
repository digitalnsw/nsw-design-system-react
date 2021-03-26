import 'nsw-design-system/src/main.scss'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import "@fontsource/montserrat";
import "@fontsource/montserrat/600.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  viewMode: 'docs',
}
