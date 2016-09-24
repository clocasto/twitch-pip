import React, {Component} from 'react'
import Console from './Console'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

class Player extends Component {
  render() {

		let { style } = this.props
		let div1Style = {
			backgroundColor: style.thin.color,
			height: style[style.one].height,
			width: style[style.one].width,
			position: style.thin.position,
			top: style[style.one].top,
			left: style[style.one].left,
			bottom: style[style.one].bottom,
			right: style[style.one].right,
			zIndex: style[style.one].zIndex
		}
		console.log(style[style.two].color)
		let div2Style = {
			backgroundColor: style.fat.color,
			height: style[style.two].height,
			width: style[style.two].width,
			position: style.fat.position,
			bottom: style[style.two].bottom,
			right: style[style.two].right,
			top: style[style.two].top,
			left: style[style.two].left,
			zIndex: style[style.two].zIndex
		}
		let pdiv = {
			position: 'relative',
			height: '400px'
		}

    return (
    	<div style={pdiv}>
				<div style={div2Style}>
				
				</div>
			<br />
			<br />
			<br />
			<br />

			<div style={div1Style}>
			</div>

			<br />
			<br />

			<Console {...this.props}/>
		</div>
		);
	}
}

export default Player
