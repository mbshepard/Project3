import React, { Component, useState } from 'react';
import { AnimatePauseIcon, AnimatePlayIcon } from "../util/appIcons";
import { SoundXContext } from "./AudioProvider";
import { round } from "./analyzers/TimeOverviewAnalyzer";
import {nbSpace} from "../util/Constants"

export class PlayProgress extends Component {
    static contextType = SoundXContext;

    state = {
        pos: 0,
        playing: false,
        max: 0,
        show: false
    };

    // const [pos, setPos] = useState(0);
    componentDidMount() {
        this.context.audioListener.progressX = this;
    }

    componentWillUnmount() {
        this.context.audioListener.progressX = null;
    }

    toggle = () => {
        this.context.audio.toggle();
        const playing = !this.state.playing;
        this.setState({ playing });

    };
    stop = (pos) => {
        this.context.audio.stop()
    };

    progress = (pos) => {
        this.setState({ pos });
    };

    changed = (e) => {
        const pos = e.target.value;
        this.setState({ pos });
        this.context.audio.jumpTo(pos);
    };

    loaded = (duration) => {
        this.setState({ max: duration });
        this.setState({ show: true })
    }

    render() {
        const { max, pos, show, playing } = this.state;
        const posMin = round(pos / 60, 2);
        const endMin = round(max / 60, 2);
        return (
            <div>
                {show &&
                    <div>

                        <span onClick={this.toggle}>
                            {playing ? <AnimatePauseIcon /> : <AnimatePlayIcon />}
                            {nbSpace(2)}
                            <span style={{ fontSize: 12 }}>{posMin}</span>
                            {nbSpace(2)}
                            <input onChange={this.changed}
                                type={"range"}
                                min={0}
                                max={max}
                                value={pos}
                                style={{ width: 700 }}
                            /> {endMin}
                        </span>
                    </div>
                }
            </div>
        );
    }

}

