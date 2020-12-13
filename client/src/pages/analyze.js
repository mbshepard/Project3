import { Link } from "react-router-dom";
import { TimeOverviewAnalyzer } from "../xsound/analyzers/TimeOverviewAnalyzer";
import { TechniqueManager } from "../xsound/TechniqueManager";
import {useContext, useEffect} from "react";
import {SoundXContext} from "../xsound/AudioProvider";

const Analyze = () => {
    const {audioListener} = useContext(SoundXContext);

    useEffect(() => {
        audioListener.showTopNav(true,false,true);
        audioListener.stopAll();
        audioListener.loadCurrentSong();
    }, []);

    return <div>

        {/*<TimeOverviewAnalyzer apiUrl={""} key={"analyzer"} w={800} h={100} />*/}
        <div style={{width:800,height:250}}/>
        <TechniqueManager/>
        
    </div>;
}
 
export default Analyze;