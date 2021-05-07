import * as S from './styles';

const Main = ({
  title = 'Boilerplate NextJS',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="" alt="Boilerplate Logo" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="" />
  </S.Wrapper>
);

export default Main;
