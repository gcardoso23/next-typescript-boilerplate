import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('is announced as an image with the project name', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByRole('img', { name: 'Boilerplate NextJS' })).toBeInTheDocument();
  });

  it('accepts a size', () => {
    renderWithTheme(<Logo size={32} />);

    expect(screen.getByRole('img')).toHaveAttribute('width', '32');
  });
});
