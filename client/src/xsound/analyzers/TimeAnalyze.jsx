import React, {Component, createRef} from 'react';
import {SoundXContext} from "../AudioProvider";

export class TimeAnalyze extends Component{
    state={
        show:false
    }

    static contextType = SoundXContext;
    canvasRef=createRef();

    componentDidMount() {
        this.context.audioListener.timeAnalyze=this;
    }
    componentWillUnmount() {
        this.context.audioListener.timeAnalyze=null;
    }

    loaded=()=>{
        this.setState({show:true});
        const canvas = this.canvasRef.current;
        this.context.audio.createTimeAnalyzer(canvas);
  }

    render() {
        const {w, h} = this.props;

        return (
            <div>
                {this.state.show &&
                <div>
                    <svg ref={this.canvasRef} width={w} height={h}> </svg>
                </div>
                }
            </div>
        );
    }
}