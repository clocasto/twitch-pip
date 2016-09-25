import React, {Component} from 'react'
import Console from './Console';
import TwitchPlayer from './twitch';
import Draggable, {DraggableCore} from 'react-draggable';

class Player extends Component {
  render() {
		let { pip } = this.props;
		let dragPip = this.props.dragPip;
		let resizePip = this.props.resizePip;
		let toggleResize = this.props.toggleResize;
		const base = {
		    height: '100%',
		    width: '100%',
		    zIndex: -10,
		    enabled: false
		}

		let small = {
			...pip.style,
			...pip.style.size
		};
		let styles = {pip: small, base}

		let one = styles[this.props.style['1']];
		let two = styles[this.props.style['2']];

		let oneInfo = {
			pip,
			dragPip,
			resizePip,
			toggleResize,
			info: {
				name: 'one',
				stream: 'theblinks',
				disabled: false
			},
			style: {
				height: one.height,
				width: one.width,
				zIndex: one.zIndex,
				enabled: one.enabled
			}
		}

		let twoInfo = {
			pip,
			dragPip,
			resizePip,
			toggleResize,
			info: {
				name: 'two',
				stream: 'pokelawls',
				disabled: true
			},
			style: {
				height: two.height,
				width: two.width,
				zIndex: two.zIndex,
				enabled: two.enabled
			}
		}

		let pdiv = {
			position: 'relative',
			height: '800px'
		}

    return (
    	<div style={pdiv} onMouseMove={pip.resize ? resizePip.bind(null) : null} >
				<TwitchPlayer {...twoInfo}>
				</TwitchPlayer>
				<TwitchPlayer {...oneInfo} >
				</TwitchPlayer>
		</div>
		);
	}
}

export default Player
