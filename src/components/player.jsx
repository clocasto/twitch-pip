import React, {Component} from 'react'

class Player extends Component {
	render(){
		return (
		<div onClick={this.props.func1.bind(null, 1)}>
			<h1>I am the player div!</h1>
		</div>
		);
	}
}

export default Player