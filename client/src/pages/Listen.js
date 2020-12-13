import {useContext, useEffect} from "react";
import {SoundXContext} from "../xsound/AudioProvider";

const Listen = () => {
    const {audioListener} = useContext(SoundXContext);

    useEffect(() => {
        audioListener.showTopNav(true, true,false);
        audioListener.stopAll();
        audioListener.loadCurrentSong();

    }, []);
    return <div>
        Listen

    </div>;
}

export default Listen;