import styled from 'styled-components';

export const Wrapper = styled.main`
  align-items: center;
  background-color: #06082b;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Logo = styled.img``;

// Fluid sizes grow with the viewport but start from the user's own font size.
export const Title = styled.h1`
  font-size: clamp(2.5rem, 1.5rem + 3vw, 4rem);
  margin-bottom: 1rem;
`;

export const Description = styled.h2`
  font-size: clamp(1.25rem, 1rem + 1vw, 1.75rem);
  font-weight: 400;
`;

export const Illustration = styled.img``;
