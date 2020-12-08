import React, {Component, createRef} from 'react';
import {SoundXContext} from "../AudioProvider";

export class FFTAnalyze extends Component{
    state={
        show:false
    }

    static contextType = SoundXContext;
    canvasRef=createRef();

    componentDidMount() {
        this.context.audioListener.fftAnalyze=this;
    }
    componentWillUnmount() {
        this.context.audioListener.fftAnalyze=null;
    }

    loaded=()=>{

        this.setState({show:true});
        const canvas = this.canvasRef.current;
        this.context.audio.createFftAnalyzer(canvas);

    }

    render() {
        const {w, h} = this.props;

        return (
            <div>
                {this.state.show &&
                <svg ref={this.canvasRef} width={w} height={h}> </svg>
                }
            </div>
        );
    }
}