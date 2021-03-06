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
    const clearClips =()=>{
        audioListener.resetTechniques();
    }

    const saveClips=()=>{
        const allClips=audioListener.getClipList();
        const {userId} = audioListener.user;
        const songId = audioListener.selectedSongId;
            fetch(`/audio/saveclips/${userId}/${songId}`, {
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
        // }else{
        //     alert("There is no analysis made in this page")
        // }

    }
    var phantom = {
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%',
      }    


    return <div>
        <Container fluid style={{backgroundColor: "darkgrey"}}>
            <Row style={{marginBottom: -35}}>
                <div style={{width:'100%',height:135, backgroundColor: "rgb(38, 50, 56)"}}/>
            </Row>
            
            <TechniqueManager/>
            
            <Row>
                <div style={{
                    width:"100%",
                    marginTop:-10,
                    backgroundColor: "rgb(38, 50, 56)",
                    boxShadow: "10px 20px 30px"
                }}>
                    <Button variant="success" onClick={saveClips} style={{margin: "25px"}}>Save</Button>
                    <Button  variant="danger" onClick={clearClips} style={{margin: "25px"}}>Clear</Button>
                </div>
            </Row>
        </Container>
        <div style={phantom}></div>
    </div>;
}
 
export default Analyze;