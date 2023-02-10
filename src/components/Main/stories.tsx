import { Meta, Story } from '@storybook/react';

import Main, { MainProps } from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Boilerplate NextJS',
    description: 'TypeScript, ReactJS, NextJS and Styled Components'
  }
} as Meta<MainProps>;

export const Basic: Story<MainProps> = args => <Main {...args} />;
