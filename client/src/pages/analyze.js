import {TechniqueManager} from "../xsound/TechniqueManager";
import {useContext, useEffect} from "react";
import {SoundXContext} from "../xsound/AudioProvider";
import Button from "react-bootstrap/Button";

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

        {/*<TimeOverviewAnalyzer apiUrl={""} key={"analyzer"} w={800} h={100} />*/}
        <div style={{width:800,height:250}}/>
        <TechniqueManager/>
        <Button onClick={saveClips}>Save</Button>
    </div>;
}
 
export default Analyze;