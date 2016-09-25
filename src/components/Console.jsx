import React, {Component} from 'react'

class Console extends Component {
  render(){
    return (
      <div>
        <button onClick={this.props.swapPositions.bind(null)}>
          swap
        </button>
      </div>
    )
  }
}


export default Console
