import React, {Component} from 'react'
import Console from './Console'

class Player extends Component {
  render() {
		let { style } = this.props
		let div1Style = {
			"backgroundColor": style.thin.color,
			height: style.thin.height,
			width: style.thin.width,
			position: style.thin.position,
			top: style[style.one].top,
			left: style[style.one].left
		}
		console.log(style[style.two].color)
		let div2Style = {
			"backgroundColor": style.fat.color,
			height: style.fat.height,
			width: style.fat.width,
			position: style.fat.position,
			bottom: style[style.two].bottom,
			right: style[style.two].right
		}
    return (
    <div>
			<div style={div1Style}>
			</div>
			<br />
			<br />
			<br />
			<br />
			<div style={div2Style}>
			</div>
			<h1>I am the player div!</h1>
			<Console {...this.props}/>
		</div>
		);
	}
}

export default Player
