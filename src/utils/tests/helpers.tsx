import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

/** Renders with the same theme the app provides in _app.tsx. */
export const renderWithTheme = (ui: ReactElement): RenderResult =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
