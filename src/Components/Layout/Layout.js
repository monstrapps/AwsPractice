import React from 'react'
import { 
  Drawer,
  AppBar,
  Toolbar
} from '@material-ui/core'
import NavMenu from './NavMenu';

class Layout extends React.PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div>
        <NavMenu />
      </div>
    )
  }
}

export default Layout;
