import React, { Component } from 'react';
import Draggable from 'react-draggable';


class TwitchPlayer extends Component {
    componentDidMount() {

        let { info } = this.props;

        let options = {
            height: '100%',
            width: '100%',
            channel: info.stream
        };

        this.player = new Twitch.Player(info.name, options);

        console.log('twitchprops', this.props)
        this.player.setVolume(0.5);
        this.player.addEventListener(Twitch.Player.PAUSE, () => { console.log('Player is paused!'); });
    }

    render() {
        // console.log('kids',document.getElementById(this.props.info.name).childNodes)
        let { style } = this.props;
        let { info } = this.props;
        let { pip } = this.props;
        let dragPip = this.props.dragPip;
        let resizePip = this.props.resizePip;
        let toggleResize = this.props.toggleResize;
        let swapPositions = this.props.swapPositions;

        let enabler = style.enabled ? true : false;
        console.log('muted?',this.props.info.muted)

        //handle stream muting
        let muted = this.props.info.muted ? true : false;
        if (this.player) this.player.setMuted(muted);

        return (
            <Draggable cancel=".resizer" bounds="parent" disabled={ pip.disabled || !enabler }>

                <div style={ style } id={ info.name } className={enabler ? "pip" : "base"}>


                    <div onMouseDown={dragPip.bind(null)} onMouseUp={dragPip.bind(null)} className={enabler ? "drag" : null}>
                    </div>

                    {enabler && <div className="shield" style={pip.shield} onMouseUp={dragPip.bind(null)}></div>}

                    {enabler && <div className="resizer" onMouseDown={toggleResize.bind(null)}>
                        <img className='icon' id='resizepng' src="/Resize2.png" />
                    </div>}

                    {enabler && <div className="swapper" onClick={swapPositions.bind(null)}></div>}

                </div>

            </Draggable>
        );
    }
}

export default TwitchPlayer
