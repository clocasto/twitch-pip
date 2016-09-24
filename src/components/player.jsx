import React, {Component} from 'react'
import Console from './Console'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

class Player extends Component {
	getInitialState(){
		console.log('ayy',this.props)
		return {
			position: 'asdf'
		};
	}
  render() {
		let { style } = this.props
		let bindPos = function(){
			style.pos = { x: 0, y: 0 };
			this.props.swapPositions();
			let greenDiv = document.getElementById('greenDiv')
			greenDiv.style.setProperty('transform', 'none');
			this.forceUpdate()
		}.bind(this);
		let freePos = function(){

		}
		let div1Style = {
			backgroundColor: style.thin.color,
			height: style[style.one].height,
			width: style[style.one].width,
			position: style.thin.position,
			top: style[style.one].top,
			transform: style[style.one].transform,
			left: style[style.one].left,
			bottom: style[style.one].bottom,
			right: style[style.one].right,
			zIndex: style[style.one].zIndex
		}
		let div2Style = {
			backgroundColor: style.fat.color,
			transform: 'none !important',
			height: style[style.two].height,
			transform: style[style.two].transform,
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
					{/* <iframe style={div2Style}
						src="http://player.twitch.tv/?channel=sjow"
						height={style[style.two].height}
						width={style[style.two].width}
						frameborder="0"
						scrolling="no"
						allowfullscreen="true">
					</iframe> */}
				</div>
				<br />
				<br />
				<br />
				<br />
				<Draggable
					defaultPosition={style.homePosition}
					bounds="parent"
				>
					<div id='greenDiv' style={div1Style}>
						{/* <iframe style={div1Style}
							src="http://player.twitch.tv/?channel=siractionslacks"
							height={style[style.two].height}
							width={style[style.two].width}
							frameborder="0"
							scrolling="no"
							allowfullscreen="true">
						</iframe> */}
					</div>
				</Draggable>

				<br />
				<br />

				<Console {...this.props}/>
				<button onClick={bindPos.bind(null)}>
					bind position
				</button>

					</div>
		);
	}
}

export default Player
