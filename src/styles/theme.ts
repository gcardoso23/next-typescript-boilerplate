const theme = {
  colors: {
    background: '#06082b',
    surface: '#0e1140',
    border: '#24286a',
    text: '#fafafa',
    muted: '#a6a9cf',
    primary: '#f231a5',
    secondary: '#3cd3c1'
  },
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
  },
  spacings: {
    xxsmall: '0.25rem',
    xsmall: '0.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xlarge: '3rem',
    xxlarge: '5rem'
  },
  radius: '0.75rem',
  breakpoints: {
    medium: '768px'
  },
  durations: {
    fast: '150ms',
    base: '300ms',
    slow: '600ms'
  },
  // Robert Penner's easing equations as cubic-bezier curves (easings.net).
  easings: {
    outQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    outExpo: 'cubic-bezier(0.19, 1, 0.22, 1)'
  }
} as const;

export default theme;
