import React, {Component} from 'react';
import {AudioClip} from "./AudioClip";
import {SoundXContext} from "../AudioProvider";
import {containerBGs} from "../../util/Constants";


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
                    const clipNum = new Date().getTime();
                    const score=1;
                    const clipList = [...this.state.clipList, {clipNum,score, ...range}];
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

    clearClips=()=>{
        const clipList=[];
        this.setState({clipList});
    }

    loadClips=(clipList)=>{
        this.setState({clipList});
    };

    updateScore=(id,score)=>{
        const clipList=this.state.clipList;
        clipList.forEach((itm)=>{
            if (itm.id===id){
                itm.score=score;
            }
        });
        this.setState({clipList})
    }
    render() {
        const {clipList} = this.state;
        const {technique} = this.props;

        return <>
            {clipList && clipList.length > 0 &&

            <div className={"clip-container"}
                 style={{background: containerBGs[technique] }}>

                {clipList.map((clip, idx) => {
                    return  <AudioClip key={clip.id}
                            id={clip.id}
                            start={clip.start}
                            end={clip.end}
                            score={clip.score}
                            onDelete={() => this.deleteClip(clip.id)}
                            updateScore={this.updateScore}
                        />

                })}


            </div>
            }
        </>
    }

}