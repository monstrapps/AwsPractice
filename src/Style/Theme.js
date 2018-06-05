import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/deepPurple';

const theme = createMuiTheme({
  overrides: {
    MuiListItemIcon: {
      root: {
        color: 'rgb(255, 255, 255, 0.6)'
      }
    }
  },
  palette: {
    primary: purple,
    secondary: green,
    text: {
      primary: 'rgb(255, 255, 255, 0.6)'
    },
  },
  constants: {
    drawerWidth: 240,
  },
});

export default theme;
