import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  layout: 'centered',
  backgrounds: {
    default: 'pb-background',
    values: [
      {
        name: 'pb-background',
        value: theme.colors.base.thin,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
