import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.small};
    min-height: 100%;
    padding: ${theme.spacings.xlarge} ${theme.spacings.medium};
    color: ${theme.colors.text};
    text-align: center;
    background-color: ${theme.colors.background};
    background-image: radial-gradient(circle at 50% 0%, ${theme.colors.surface}, transparent 70%);
  `}
`;

// Fluid sizes grow with the viewport but start from the user's own font size.
export const Title = styled.h1`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    font-size: clamp(2.5rem, 1.5rem + 3vw, 4rem);
    line-height: 1.1;
    letter-spacing: -0.02em;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: 32rem;
    font-size: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
    color: ${theme.colors.muted};
  `}
`;

export const Stack = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.spacings.xsmall};
    max-width: 40rem;
    margin-top: ${theme.spacings.large};
    padding: 0;
    list-style: none;
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    font-family: ${theme.font.mono};
    font-size: 0.875rem;
    color: ${theme.colors.muted};
    border: 1px solid ${theme.colors.border};
    border-radius: 999px;
    transition: color ${theme.durations.fast} ${theme.easings.outQuart},
      border-color ${theme.durations.base} ${theme.easings.outQuart},
      transform ${theme.durations.slow} ${theme.easings.outExpo};

    &:hover {
      color: ${theme.colors.text};
      border-color: ${theme.colors.secondary};
      transform: translateY(-2px);
    }
  `}
`;
