import 'styled-components';

import theme from './theme';

type Theme = typeof theme;

// Types `props.theme` in every styled component.
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
