import React from 'react'
import { 
  withStyles,
  withTheme,
} from '@material-ui/core'
import { compose } from 'recompose';
import styles from './Layout.styles';
import DrawerItems from './DrawerItems';
import AppBar from './AppBar';
import Drawer from './Drawer';

class Layout extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const {
      classes,
      children,
    } = this.props;
    const { mobileOpen } = this.state;
    return (
      <div className={classes.root}>
        <AppBar />
        <Drawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={() => this.handleDrawerToggle()}
        />
        <main className={classes.content}>
          {children}
        </main>
      </div>
    );
  }
}

export default compose(withStyles(styles), withTheme())(Layout)