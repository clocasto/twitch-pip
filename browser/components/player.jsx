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
		let closePlayer = this.props.closePlayer;

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


		let makeStyle = function(i) {
			let config = props.app[i].size;

			let retConfig = {
				pip,
				dragPip,
				resizePip,
				toggleResize,
				swapPositions,
				switchChannel,
				closePlayer,
				info: {
					name: i.toString(),
					stream: props.app[i].name,
					disabled: false,
					muted: styles[config].muted,
					size: config,
					id: i
				},
				style: {
					height: styles[config].height,
					width: styles[config].width,
					zIndex: styles[config].zIndex,
					enabled: styles[config].enabled
				}
			}

			return retConfig;
		}

		let pdiv = {
			position: 'relative',
			height: '720px',
			width: '100%'
		}

    return (
    	<div id='playercontainer' style={pdiv} onMouseMove={pip.resize ? resizePip.bind(null) : null} >
			{this.props.app.map((player, i) => <TwitchPlayer key={i} id={i} {...makeStyle(i)} />)}
		</div>
		);
	}
}

export default Player
