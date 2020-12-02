import React, {Component} from 'react';
import _ from 'lodash'
import {AnimatePauseIcon, AnimatePlayIcon, DeleteClipIcon} from "../../util/appIcons";
import {SoundXContext} from "../AudioProvider";

export class AudioClip extends Component {
    static contextType = SoundXContext;

    state = {
        playing: false,
        posValue: 0,
        id:this.props.id,
        start:this.props.start,
        end:this.props.end,
        currentPos:this.props.start,
    };
    componentDidMount() {
        this.context.audioListener.registerClip(this);
    }
    componentWillUnmount() {
        this.stop();
        this.context.audioListener.unregisterClip(this);
    }

    deleteClip=()=>{
        this.props.onDelete(this.props.id);
    }

    progress=(pos)=>{
        const {audio}=this.context;
        const {start,end,currentPos}=this.state;
        const posValue=pos - Math.floor(start);
        this.setState({posValue,
            currentPos:pos
        });
        if (pos >= end) {
            this.setState({posValue:0});
            audio.jumpTo(start)
        }
    };

    stop=()=>{
        if (this.state.playing) {
            this.setState({playing: false});
            const {audio} = this.context;
            audio.stop();
        }
    }

    toggle = () => {
        const {audio}=this.context;
        const {id,playing,currentPos}=this.state;
        if (!playing){
            this.context.audioListener.requestFocus(id);
            audio.jumpTo(currentPos)
        }
        audio.toggle();
        this.setState({playing:!playing});

    };

    getId=()=>{
        return this.state.id;
    };

    render() {

        const {playing,posValue,start,end}=this.state;
        const playMap = _.range(Math.floor(start), Math.floor(end) + 1);
        const max = playMap.length;
        const w = 100;//max * 11;


        const changed = (e) => {
            // props.changed(e.target.value);
            console.log(e.target.value);
        }



        return (
            <div className={"audio-clip"} style={{width:w}}>
                <span><span onClick={this.toggle}>{playing ? <AnimatePauseIcon /> : <AnimatePlayIcon />}</span>
                <input onChange={changed}
                       type={"range"}
                       min={0}
                       max={max}
                       value={posValue}
                       style={{width: "60%"}}
                />
                <DeleteClipIcon onClick={this.deleteClip}/>
                </span>
            </div>
        );
    }
    toString=()=>{

        return this.getId();
    };


};