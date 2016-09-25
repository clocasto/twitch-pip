import React, {Component} from 'react'
import Console from './Console';
import TwitchPlayer from './twitch';
import Draggable, {DraggableCore} from 'react-draggable';

class Player extends Component {
  render() {
		let { style } = this.props;
		let one = style[style.one];
		let two = style[style.two];

		let oneInfo = {
			info: {	
				name: 'one',
				stream: 'gosutv_ow',
				disabled: false
			},
			style: {
				height: one.height,
				width: one.width,
				backgroundColor: 'green',
				position: 'absolute',
				top: one.top,
				left: one.left,
				bottom: one.bottom,
				right: one.right,
				zIndex: one.zIndex
			}
		} 

		let twoInfo = {
			info: {	
				name: 'two',
				stream: 'siractionslacks',
				disabled: true
			},
			style: {
				height: two.height,
				width: two.width,
				backgroundColor: 'red',
				position: 'absolute',
				bottom: two.bottom,
				right: two.right,
				top: two.top,
				left: two.left,
				zIndex: two.zIndex
			}
		}

		let pdiv = {
			position: 'relative',
			height: '600px'
		}

    return (
    	<div style={pdiv}>
			<TwitchPlayer {...oneInfo} />
			<TwitchPlayer {...twoInfo} />
		</div>
		);
	}
}

export default Player
