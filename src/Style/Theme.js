import { createMuiTheme } from '@material-ui/core/styles';
import { green300 as light, green500 as main, green700 as dark } from '@material-ui/core/colors';

const theme = createMuiTheme({

  overrides: {
    MuiListItemIcon: {
      root: {
        color: 'rgb(255, 255, 255, 0.6)'
      }
    }
  },
  palette: {
    primary: {
      light: '#8e99f3',
      main: '#5c6bc0',
      dark: '#26418f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#2C3133',
    },
    text: {
      primary: 'rgb(255, 255, 255, 0.6)'
    },
  },
  constants: {
    drawerWidth: 240,
  },
});

export default theme;
