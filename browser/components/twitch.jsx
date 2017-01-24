import React, { Component } from 'react';
import Draggable from 'react-draggable';
import {Icon} from 'react-fa'


class TwitchPlayer extends Component {

    componentDidMount() {

        let { info } = this.props;

        let options = {
            height: '100%',
            width: '100%',
            channel: info.stream
        };

        this.player = new Twitch.Player(info.name, options);

        this.player.setVolume(0.5);
        this.player.setQuality(info.size === 'base' ? 'high' : 'low');
        this.player.setMuted(info.muted ? true : false);
        this.player.addEventListener(Twitch.Player.PAUSE, () => { console.log('Player is paused!'); });
    }

    render() {

        let { style } = this.props;
        let { info } = this.props;
        let { pip } = this.props;
        let dragPip = this.props.dragPip;
        let resizePip = this.props.resizePip;
        let toggleResize = this.props.toggleResize;

        let swap = function() {
            return this.props.swapPositions(info.name);
        }

        let close = function(e) {
            return this.props.closePlayer(info.id);
        }

        let enabler = style.enabled ? true : false;

        //handle stream muting
        let muted = this.props.info.muted ? true : false;

        if (this.player) this.player.setMuted(muted);

        return (
            <Draggable cancel=".resizer" bounds="parent" disabled={ pip.disabled || !enabler }>

                <div style={ style } id={ info.name } className={enabler ? "pip" : "base"}>

                    <div onMouseDown={dragPip.bind(null)} onMouseUp={dragPip.bind(null)} className={enabler ? "drag" : null}>
                        <Icon className='small-button' name='arrows'></Icon>

                    </div>

                    {enabler && <div className="shield" style={pip.shield} onMouseUp={dragPip.bind(null)}></div>}

                    {enabler && <div className="resizer" onMouseDown={toggleResize.bind(null)}>
                        <img className='icon' id='resizepng' src="/Resize2.png" />
                    </div>}

                    {enabler && <div className="swapper" onClick={swap.bind(this)}>
                        <Icon className='small-button' name='expand'></Icon>
                    </div>}
                    
                    {enabler && <div className="closer" onClick={close.bind(this)}></div>}

                </div>

            </Draggable>
        );
    }
}

export default TwitchPlayer
