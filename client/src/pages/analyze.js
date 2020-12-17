import {TechniqueManager} from "../xsound/TechniqueManager";
import {useContext, useEffect} from "react";
import {SoundXContext} from "../xsound/AudioProvider";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Analyze = () => {
    const {audioListener} = useContext(SoundXContext);

    useEffect(() => {
        audioListener.showTopNav(true,false,true);
        audioListener.stopAll();
        audioListener.loadCurrentSong();


    }, []);

    const saveClips=()=>{
        const allClips=audioListener.getClipList();
        if (allClips && allClips.length>0) {
            fetch("/audio/saveclips", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(allClips)
            }).then((resp) => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    alert("cannot save clips")
                }
            }).then((data) => {
                // console.log(data);
            });
        }else{
            alert("There is no analysis made in this page")
        }

    }

    return <div>
        <Container fluid>
            <Row>
                <div style={{width:'100%',height:250, backgroundColor: "rgb(38, 50, 56)"}}/>
            </Row>
            
            <TechniqueManager/>
            
            <Row style>
                <div style={{
                    display:"flex",
                    flexDirection:"row-reverse",
                    width:"70%",
                    marginTop:50,
                    backgroundColor: "rgb(38, 50, 56)"
                }}>
                    <Button variant="success" onClick={saveClips}>Save</Button>
                    <Button  variant="danger">Clear</Button>
                </div>
            </Row>
        </Container>
    </div>;
}
 
export default Analyze;