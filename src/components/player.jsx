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
		let switchChannel = this.props.switchChannel;

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
		let props = this.props;


		let makeStyle = function(id) {
			let config = props.app[id].size;

			return {
				pip,
				dragPip,
				resizePip,
				toggleResize,
				swapPositions,
				switchChannel,
				info: {
					name: id.toString(),
					stream: props.app[id].name,
					disabled: false,
					muted: styles[config].muted
				},
				style: {
					height: styles[config].height,
					width: styles[config].width,
					zIndex: styles[config].zIndex,
					enabled: styles[config].enabled
				}
			}
		}

		let pdiv = {
			position: 'relative',
			height: '605px',
			width: '100%'
		}

    return (
    	<div style={pdiv} onMouseMove={pip.resize ? resizePip.bind(null) : null} >
			{this.props.app.map(player => <TwitchPlayer key={player.id} {...makeStyle(player.id)} />)}
		</div>
		);
	}
}

export default Player
