import { screen, within } from '@testing-library/react';

import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import Main from '.';

describe('<Main />', () => {
  it('renders the logo, heading and description', () => {
    const { container } = renderWithTheme(<Main />);

    expect(screen.getByRole('img', { name: 'Boilerplate NextJS' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'Boilerplate NextJS' })).toBeInTheDocument();
    expect(screen.getByText('TypeScript, ReactJS, NextJS and Styled Components')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('accepts a custom title and description', () => {
    renderWithTheme(<Main title="My app" description="Built on the boilerplate" />);

    expect(screen.getByRole('heading', { name: 'My app' })).toBeInTheDocument();
    expect(screen.getByText('Built on the boilerplate')).toBeInTheDocument();
  });

  it("lists what's included", () => {
    renderWithTheme(<Main />);

    const items = within(screen.getByRole('list', { name: "What's included" })).getAllByRole('listitem');
    expect(items).toHaveLength(8);
    expect(items[0]).toHaveTextContent('Next.js 13');
  });

  it('uses the theme colors', () => {
    const { container } = renderWithTheme(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': theme.colors.background });
  });
});
