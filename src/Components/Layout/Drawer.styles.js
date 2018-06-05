export const styles = theme => ({
  drawerPaper: {
    width: theme.constants.drawerWidth,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'rgba(255, 255, 255, 0.6)',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
})