import 'nsw-design-system/dist/css/main.css'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { create } from '@storybook/theming';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  viewMode: 'docs',
}
