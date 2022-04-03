import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F5B9A',
    },
    secondary: {
      main: '#fff',
      dark: '#F2F7F8',
      contrastText: '#0F5B9A',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
          boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
        },
      },
    },
  },
});

export default theme;
