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

		let small = {
			...pip.style,
			...pip.style.size
		};
		let large = this.props.style.base;
		let styles = {pip: small, base: large}

		let one = styles[this.props.style.one];
		let two = styles[this.props.style.two];

		console.log('one', one);
		console.log('two', two);

		let oneInfo = {
			pip,
			dragPip,
			resizePip,
			toggleResize,
			info: {	
				name: 'one',
				stream: 'hearthstonefr',
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
				stream: 'siractionslacks',
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
