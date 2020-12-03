import React, { Component, createRef } from 'react';



export class TimeOverviewAnalyzer extends Component {
    // static contextType = SoundXContext;

    state = {
        range: { start: 0, end: 50 }
    }
    canvasRef = createRef();

    componentDidMount() {
        const { analyzer } = this.props;
        const canvas = this.canvasRef.current;
        analyzer.init(canvas, this);
    }

    setRange = (range) => {
        this.setState({ range })
    }

    render() {

        const { analyzer, w, h } = this.props;
        const { range } = this.state;


        const stop = () => {
            analyzer.stop()
        }
        const play = () => {
            analyzer.play(range.start, range.end);
        }
        return (
            <div>
                    <div>
                        <span>{range.start} sec</span> - <span>{range.end} sec</span><br />
                        <canvas ref={this.canvasRef} width={w} height={h}></canvas>
                        {/*<svg ref={this.canvasRef} width={w} height={h}></svg>*/}
                    </div>
            
                <div>
                    <button onClick={play}>play</button>
                    <button onClick={stop}>stop</button>
                </div>
            </div>
        )
    }

}