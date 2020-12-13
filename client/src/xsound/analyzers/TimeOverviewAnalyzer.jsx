import React, {Component, createRef} from 'react';
import {SoundXContext} from "../AudioProvider";
import {AnimatePauseIcon, AnimatePlayIcon} from "../../util/appIcons";

export const round=(value,places)=>{
    const power=Math.pow(10,2);
    return Math.round(value*power)/power;
}
export class TimeOverviewAnalyzer extends Component {
    state = {
        range: {start: 0, end: 50},
        show: false,
        analyzer: null,
        playing:false
    }

    static contextType = SoundXContext;
    canvasRef = createRef();

    componentDidMount() {
        this.context.audioListener.timeOverviewAnalyzer = this;

    }

    componentWillUnmount() {
        this.context.audioListener.timeOverviewAnalyzer = null;
    }

    loaded(duration) {
        const range=this.state.range;
        range.end=duration;
        range.start=0;
        this.setState({show: true,range});


    }

    loadSong = (songId) => {
        const audio = this.context.audio;
        audio.doLoad(`${this.props.apiUrl}/audio/load/${songId}`, {

            createAnalyzers: () => {
                const analyzer = audio.createAnalyzer();
                const canvas = this.canvasRef.current;
                analyzer.init(canvas);
             }
        })

    };

    setRange = (range) => {
        this.setState({range})
    }
    toggle=()=>{
        if (this.state.playing){
            this.stop()
        }else{
            this.play()
        }
    }

     stop = () => {
        this.setState({playing:false})
        this.context.audio.stop();
    }
     play = () => {
         this.setState({playing:true})
        const range=this.state.range;
        this.context.audio.playRange(range.start, range.end);
    }
    render() {

        const {w, h} = this.props;
        const {range, show} = this.state;

        const startMin=round(range.start/60,2);
        const endMin=round(range.end/60,2);

        return (
            <div>
                {
                <div>
                    <canvas ref={this.canvasRef} width={w} height={h}></canvas>
                    <br/>
                    {show &&
                        <div><span>{startMin}</span> - <span>{endMin}</span><br/>
                            <div onClick={this.toggle}>{this.state.playing ? <AnimatePauseIcon/> :
                                <AnimatePlayIcon/>}</div>
                        </div>   }
                </div>
                }

            </div>
        )
    }

}