import React, {Component,useEffect, createRef} from 'react';
import {SoundXContext} from "../AudioProvider";

export class FFTAnalyze extends Component{
    static contextType = SoundXContext;
    canvasRef=createRef();

    componentDidMount() {
        const canvas = this.canvasRef.current;
        this.context.audioListener.getFftAnalyzer(canvas);
    }

    render() {
        const {w, h} = this.props;

        return (
            <div>
                <svg ref={this.canvasRef} width={w} height={h}></svg>
            </div>
        );
    }
}