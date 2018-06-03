export const styles = theme => ({
  appBar: {
    position: 'absolute',
    marginLeft: theme.constants.drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.constants.drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
})