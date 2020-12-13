import {useContext, useEffect} from "react";
import {SoundXContext} from "../xsound/AudioProvider";

const LandingPage = () => {
    const {audioListener} = useContext(SoundXContext);

    useEffect(() => {

            audioListener.showTopNav(false,false,false);
            audioListener.stopAll();

    }, []);

    return <div>
        Landing Page
    </div>;
}
 
export default LandingPage;