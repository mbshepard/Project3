import React, {Component,useEffect, createRef} from 'react';
import {SoundXContext} from "../AudioProvider";

export class TimeAnalyze extends Component{
    static contextType = SoundXContext;
    canvasRef=createRef();

    componentDidMount() {
        const canvas = this.canvasRef.current;
        this.context.audioListener.getTimeAnalyzer(canvas);
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