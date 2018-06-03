import React from 'react'

class Layout extends React.PureComponent {
  render() {
    const {
      children,
    } = this.props;
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Layout;
