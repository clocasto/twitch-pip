import React, {Component} from 'react'
import TwitchPlayer from './twitch';
import Draggable, {DraggableCore} from 'react-draggable';

class Player extends Component {
  render() {

		let { pip } = this.props;
		let dragPip = this.props.dragPip;
		let resizePip = this.props.resizePip;
		let toggleResize = this.props.toggleResize;
		let swapPositions = this.props.swapPositions;

		const base = {
		    height: '100%',
		    width: '100%',
				muted: false,
		    zIndex: this.props.style.baseZ,
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
			swapPositions,
			info: {
				name: 'one',
				stream: 'imaqtpie',
				disabled: false,
				muted: one.muted
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
			swapPositions,
			info: {
				name: 'two',
				stream: 'overwatchopen',
				disabled: true,
				muted: two.muted
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
			height: window.innerHeight - 52,
			width: '100%'
		}

    return (
    	<div id='playercontainer' style={pdiv} onMouseMove={pip.resize ? resizePip.bind(null) : null} >
				<TwitchPlayer {...twoInfo} />
				<TwitchPlayer {...oneInfo} />
		</div>
		);
	}
}

export default Player
