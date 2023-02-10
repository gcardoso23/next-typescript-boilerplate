import { useTheme } from 'styled-components';

export type LogoProps = {
  size?: number;
};

const Logo = ({ size = 72 }: LogoProps) => {
  const theme = useTheme();

  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="Boilerplate NextJS">
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={theme.colors.primary} />
          <stop offset="1" stopColor={theme.colors.secondary} />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#logo-gradient)" />
      <path
        d="M16 33V15l16 18V15"
        fill="none"
        stroke={theme.colors.background}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
