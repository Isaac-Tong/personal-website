import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { yellow } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: yellow[500],
    },
  },
  typography: {
      fontFamily: 'sans-serif'
  }
});

export default Theme;