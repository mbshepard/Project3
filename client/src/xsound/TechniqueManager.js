
import React, {useContext,useState,useEffect} from 'react';
import {ClipContainer} from "./clips/ClipContainer";
import {AddClipIcon} from "../util/appIcons";
import {SoundXContext} from "./AudioProvider";
import {containerBGs, TECHNIQUE_IMAGERY, TECHNIQUE_METAPHOR, TECHNIQUE_PUNCH_LINE} from "../util/Constants";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'


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
        return <div
            onClick={() => addClip(technique)}
            style={{background: containerBGs[technique],cursor:"pointer"}}>
            <span><AddClipIcon/> Add to {technique}</span>
        </div>
    }
    return (
        <Row style={{display: 'block'}}>
            { show &&
                <div style={{justifyContent: "space-evenly"}}>
                    <CardColumns>
                        <Card bg="dark" text="light" border="light" style={{height: "30rem"}}>
                            <Card.Header className={"technique"}><AddClipButton key={1} technique={TECHNIQUE_METAPHOR}/></Card.Header>
                            <Card.Body style={{height: "20rem"}}>
                                <ClipContainer technique={TECHNIQUE_METAPHOR} max={4}/>
                            </Card.Body>
                        </Card>
                        <Card bg="dark" text="light" border="light" style={{height: "30rem"}}>
                            <Card.Header className={"technique"}><AddClipButton key={2} technique={TECHNIQUE_PUNCH_LINE}/></Card.Header>
                            <Card.Body style={{height: "20rem"}}>
                                <ClipContainer technique={TECHNIQUE_PUNCH_LINE} max={2}/>
                            </Card.Body>
                        </Card>
                        <Card bg="dark" text="light" border="light" style={{height: "30rem"}}>
                            <Card.Header className={"technique"}><AddClipButton key={3} technique={TECHNIQUE_IMAGERY}/></Card.Header>
                            <Card.Body style={{height: "20rem"}}>
                                <ClipContainer technique={TECHNIQUE_IMAGERY} max={3}/>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </div>
            }
        </Row>
    );
};