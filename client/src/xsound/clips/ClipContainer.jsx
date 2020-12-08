import React, {Component} from 'react';
import {AudioClip} from "./AudioClip";
import {SoundXContext} from "../AudioProvider";
import {containerBGs} from "../TechniqueManager";


export class ClipContainer extends Component {
    static contextType = SoundXContext;

    state = {
        clipList: []
    };

    componentDidMount() {
        const {technique} = this.props;
        this.context.audioListener.registerTechnique(technique, this);
    }

    addClip = () => {
        if (this.state.clipList.length<this.props.max) {
            const range = this.context.audioListener.timeOverviewRange;
            if(range) {
                const secs = Math.floor(range.end - range.start);
                if ( secs > 10) {
                    const id = new Date().getTime();
                    const clipList = [...this.state.clipList, {id, ...range}];
                    this.setState({clipList});
                } else {
                    alert(`Selected clips of ${secs} is less than 10secs`)

                }
            }

        }else{
            alert(`Cannot exceeded max clips of ${this.props.max}`)
        }
    };


    deleteClip = (id) => {
        const clipList = this.state.clipList.filter((itm) => itm.id !== id);
        this.setState({clipList});
    };

    render() {
        const {clipList} = this.state;
        const {technique} = this.props;

        return <>
            {clipList && clipList.length > 0 &&

            <div className={"clip-container"} style={{background: containerBGs[technique]}}>
                <ul id={"navlist"}>
                    {clipList.map((clip, idx) => {
                        return <li key={clip.id}>
                            <AudioClip
                                id={clip.id}
                                start={clip.start}
                                end={clip.end}
                                onDelete={() => this.deleteClip(clip.id)}
                            />
                        </li>
                    })}
                </ul>
            </div>
            }
        </>
    }

}