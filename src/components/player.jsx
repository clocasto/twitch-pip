import React, {Component} from 'react'
import Console from './Console';
import TwitchPlayer from './twitch';

class Player extends Component {
  render() {
		let { style } = this.props;
		let one = style[style.one];
		let two = style[style.two];

		let oneInfo = {
			info: {	
				name: 'one',
				stream: 'gosutv_ow'
			},
			style: {
				height: one.height,
				width: one.width,
				backgroundColor: style.thin.color,
				position: style.thin.position,
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
				stream: 'siractionslacks'
			},
			style: {
				height: two.height,
				width: two.width,
				backgroundColor: style.fat.color,
				position: style.fat.position,
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
			<TwitchPlayer {...oneInfo}>
			</TwitchPlayer>
			<TwitchPlayer {...twoInfo}>
			</TwitchPlayer>
		</div>


		);
	}
}

export default Player
