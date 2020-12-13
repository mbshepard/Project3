
import React, {useContext,useState,useEffect} from 'react';
import {ClipContainer} from "./clips/ClipContainer";
import {AddClipIcon} from "../util/appIcons";
import {SoundXContext} from "./AudioProvider";

const TECHNIQUE_METAPHOR = 'Metaphor';
const TECHNIQUE_PUNCH_LINE = 'Punch_line';
const TECHNIQUE_IMAGERY = 'Imagery';

export const containerBGs = {
    [TECHNIQUE_METAPHOR]: "#2e8b57",
    [TECHNIQUE_PUNCH_LINE]: "rgba(255,105,104,0.96)",
    [TECHNIQUE_IMAGERY]: "#237aff",
}

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
        audioListener.resetTechniques();
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