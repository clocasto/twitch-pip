import React, {Component} from 'react'

class Console extends Component {
  render(){
    return (
      <div>
        <button onClick={this.props.makeTaller.bind(null, 100)}>
          taller
        </button>
        <button onClick={this.props.makeWider.bind(null, 100)}>
          wider
        </button>
        <button onClick={this.props.swapPositions.bind(null)}>
          swap
        </button>
      </div>
    )
  }
}


export default Console