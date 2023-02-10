import Logo from 'components/Logo';

import * as S from './styles';

const stack = [
  'Next.js 13',
  'React 18',
  'TypeScript',
  'styled-components',
  'Jest & Testing Library',
  'Storybook',
  'ESLint & Prettier',
  'Husky & lint-staged'
];

export type MainProps = {
  title?: string;
  description?: string;
};

const Main = ({
  title = 'Boilerplate NextJS',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}: MainProps) => (
  <S.Wrapper>
    <Logo />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    {/* role="list" keeps the list semantics in Safari, which drops them without a list-style. */}
    <S.Stack role="list" aria-label="What's included">
      {stack.map(item => (
        <S.Item key={item}>{item}</S.Item>
      ))}
    </S.Stack>
  </S.Wrapper>
);

export default Main;
