import React from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux';
import { increment, decrement } from '../../Store/Actions/ExampleActions';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Button variant="raised" color="primary" onClick={() => this.props.dispatch(decrement())}>Decrement</Button>
        <Button variant="raised" color="secondary" onClick={() => this.props.dispatch(increment())}>Increment</Button>
        count: {this.props.example.count}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    example: state.example
  }
}

export default connect(mapStateToProps)(Home);