
import React, {useContext,useState,useEffect} from 'react';
import {ClipContainer} from "./clips/ClipContainer";
import {AddClipIcon} from "../util/appIcons";
import {SoundXContext} from "./AudioProvider";
import {containerBGs, TECHNIQUE_IMAGERY, TECHNIQUE_METAPHOR, TECHNIQUE_PUNCH_LINE} from "../util/Constants";



export const TechniqueManager=(props) =>{
    const [show, setShow] = useState(false);
    const { audioListener} = useContext(SoundXContext);

    useEffect(() => {
        audioListener.techniqueManager={loaded};
        return () => {
            audioListener.techniqueManager=null;
        };
    }, []);

    const loaded=()=>{
        setShow(true)
        const songId=audioListener.selectedSongId;
        const userId=audioListener.user.userId;

        fetch(`/audio/loadclips/${userId}/${songId}`).then((resp)=>{
            if (resp.ok){
                return resp.json();
            }else{
                alert("Cannot load User clip list")
            }
        }).then((data)=>{

            audioListener.loadClipList(data);

        })
    }
    const addClip = (technique) => {
        audioListener.addClipToTechnique(technique)
    };
    const AddClipButton = (props) => {
        const {technique}=props;
        return <li
            onClick={() => addClip(technique)}
            style={{background: containerBGs[technique],cursor:"pointer"}}>
            <span><AddClipIcon/> Add to {technique}</span>
        </li>
    }
    return (
        <div>
            { show &&
                <div>
                <ul className={"technique"}>
                    <AddClipButton key={1} technique={TECHNIQUE_METAPHOR}/>
                    <AddClipButton key={2} technique={TECHNIQUE_PUNCH_LINE}/>
                    <AddClipButton key={3} technique={TECHNIQUE_IMAGERY}/>
                </ul>
                < ClipContainer technique={TECHNIQUE_METAPHOR} max={4}/>
                <ClipContainer technique={TECHNIQUE_PUNCH_LINE} max={2}/>
                <ClipContainer technique={TECHNIQUE_IMAGERY} max={3}/>
                </div>
            }
        </div>
    );
};